import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import CrewCheckModalCSS from "./CrewCheckModal.module.css";
import styles from "../crewSearch/CrewSearch.module.css";


import {
    callCrewCheckListAPI, callCrewCheckUpdateAPI
} from "../../apis/CrewCheckAPICalls";

function CrewCheckModal({userId, setCrewCheckModal}) {

    const dispatch = useDispatch();
    const params = useParams();
    const crewCheckList = useSelector(state => state.crewCheckReducer);

    const login = useSelector(state => state.LoginReducer);
    const loginUser = login.userData;

    console.log('crewCheckList ====', crewCheckList);

    const captain = crewCheckList.data[0] && crewCheckList.data[0].crew && crewCheckList.data[0].crew.captain ? crewCheckList.data[0].crew.captain.userId : null;

    console.log('test ===========', loginUser.data.userId);
    console.log('captain ======', captain);

    const pageInfo = crewCheckList.pageInfo;

    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    const pageNumber = [];
    if(pageInfo){
        for(let i = 1; i <= pageInfo.pageEnd; i++){
            pageNumber.push(i);
        }
    }

    const [test , setTest] = useState(false);

    const [form, setForm] = useState({
        crew: {crewId: params.crewId},
        user: {userId: userId},
        today: ''
    });

    useEffect(
        () => {
            setStart((currentPage - 1) * 5);
            console.log("params.crewId", params.crewId)
            dispatch(callCrewCheckListAPI({
                currentPage: currentPage,
                crewId: params.crewId,
                userId: userId
            }))
        }
        , [test, currentPage]
    );



    const onChangeHandler = (e) => {
        const {name, checked} = e.target;
        setForm({
            ...form,
            [name]: checked ?  e.target.value : ''
        });
    }

    const onClickUpdateCrewCheckHandler = () =>{
        console.log('[CrewCheckModal] onClickUpdateCrewCheckHandler form : ', form );



        if(captain === loginUser.data.userId) {
           if(form.today === '') {
               alert('체크박스를 체크해주세요.');
               return;
           } else {
               dispatch(callCrewCheckUpdateAPI({
                   form: form
               }));
               setTest(!test);

               alert('인증 처리 하였습니다.');
           }
        } else {
            alert('캡틴만 변경할 수 있습니다.');
            return;
        }
    }

    const onCLickSetCrewCheckModalHandler= () => {
        setCrewCheckModal(false);
        window.location.reload();
    }

    return(
        <>
            <div className={CrewCheckModalCSS.modal}>
                <div className={CrewCheckModalCSS.modalContainer}>
                    <div className={CrewCheckModalCSS.main}>
                        <div
                            className={CrewCheckModalCSS.closeBtn}
                            onClick={() => onCLickSetCrewCheckModalHandler()}
                        > X </div>
                        <table className={CrewCheckModalCSS.table}>
                            {crewCheckList.data && crewCheckList.data.length > 0 && crewCheckList.data[0].user &&
                                <tr>
                                    <td className={CrewCheckModalCSS.userTd}>{crewCheckList.data[0].user.nickname}</td>
                                </tr>
                            }
                            {Array.isArray(crewCheckList.data) &&
                                crewCheckList.data.map((item, index) => (
                                    <tr>
                                        <td className={CrewCheckModalCSS.tdDiv}>
                                            <div className={CrewCheckModalCSS.todayDiv}>
                                                {item.today}
                                            </div>
                                            <div className={CrewCheckModalCSS.checkDiv}>
                                                {item.isCheck === "N" ?
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            className={CrewCheckModalCSS.checkBtn}
                                                            value={item.today}
                                                            name="today"
                                                            onChange={onChangeHandler}
                                                        />
                                                    </label> : null}
                                            </div>
                                            {item.isCheck === "N" ?
                                                <div
                                                className={CrewCheckModalCSS.submitBtn}
                                                onClick={onClickUpdateCrewCheckHandler}
                                                >
                                                    인증
                                                </div> :
                                                <div className={CrewCheckModalCSS.submitState}>인증 완료</div>
                                            }
                                        </td>
                                    </tr>
                                ))
                            }
                        </table>
                    </div>
                    <div className={styles.btnMain}>
                        <div className={styles.btnDiv2}>
                            {Array.isArray(crewCheckList.data) &&
                                <button
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className={styles.pagingBtn}
                                >
                                    &lt;
                                </button>
                            }
                            {pageNumber.map((num) => (
                                <li key={num} onClick={() => setCurrentPage(num)}>
                                    <button
                                        style={ currentPage === num ? {background : '#000928'} : null}
                                        className={styles.pagingBtn}
                                    >
                                        {num}
                                    </button>
                                </li>
                            ))}
                            { Array.isArray(crewCheckList.data) &&
                                <button
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    disabled={currentPage === pageInfo.pageEnd || pageInfo.total ==0}
                                    className={styles.pagingBtn}
                                >
                                    &gt;
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default CrewCheckModal