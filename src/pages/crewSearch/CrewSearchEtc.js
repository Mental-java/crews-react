import CrewSearchHandler from "../../component/pages/CrewSearchHandler";
import styles from "./CrewSearch.module.css";
import {useEffect, useState, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";

import {
    callCrewListAboutEtcAPI
} from "../../apis/CrewSearchAPICalls";
import crewSearchListReducer from "../../module/CrewSearchModule";

function CrewSearchEtc() {
    const dispatch = useDispatch();
    const etc = useSelector(state => state.crewSearchListReducer);
    const etcList = etc.data;

    const pageInfo = etc.pageInfo;

    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    const pageNumber = [];
    if(pageInfo){
        for(let i =1; i <= pageInfo.pageEnd; i++){
            pageNumber.push(i);
        }
    }

    useEffect(
        () => {
            setStart((currentPage - 1) * 5);
            dispatch(callCrewListAboutEtcAPI({
                currentPage: currentPage
            }));
        }
        ,[currentPage]
    );

    return (
        <>
            <div>
                <div className={styles.crewListMain}>
                    <table>
                        {
                            Array.isArray(etcList) && etcList.map((crew) => (<CrewSearchHandler key={ crew.crewId } crew={ crew }/>))
                        }
                    </table>
                </div>
            </div>

            <div className={styles.btnMain}>
                <div className={styles.btnDiv}>
                    {Array.isArray(etcList) &&
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
                    { Array.isArray(etcList) &&
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
        </>
    );
}

export default CrewSearchEtc;