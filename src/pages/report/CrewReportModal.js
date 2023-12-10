import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import ReportModalCSS from "./CrewReportModal.module.css";

import {
    callCrewReportWriteAPI
} from "../../apis/ReportAPICalls";

function CrewReportModal({ setReportModal, reportCrewId, reportCrewName}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.LoginReducer);
    const loginUser = user.userData;

    const [form, setForm] = useState( {
        reportContent: '',
        reporter: {userId: loginUser && loginUser.data ? loginUser.data.userId : null},
        reportCategory: 0,
        reportCrew: reportCrewId
    });

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        if(name === 'reportCategory') {
            setForm({
                ...form,
                reportCategory: parseInt(value)
            });
        } else {
            setForm({
                ...form,
                [name]: value
            });
        }
    };

    const onClickCrewReportHandler = () =>{
        if(form.reportContent.length < 10){
            alert('신고 내용은 최소 10글자 이상 작성해야 합니다.');
            return;
        }

        console.log('[CrewReportModal] onClickCrewReportHandler');

        dispatch(callCrewReportWriteAPI({
            form: form
        }));

        console.log('입력정보', form);

        setReportModal(false);

        alert('신고가 접수되었습니다.');
    }

    return(
        <div className={ReportModalCSS.modal}>
            <div className={ReportModalCSS.modalContainer}>
                <div className={ReportModalCSS.upDiv}>
                    <div className={ReportModalCSS.title}>
                        <h1>신고하기</h1>
                    </div>
                    <div className={ReportModalCSS.closeBtn} onClick={() => setReportModal(false)}>
                        X
                    </div>
                    <div className={ReportModalCSS.crewName}>
                        <h5>신고 대상 크루 : {reportCrewName}</h5>
                    </div>
                    <div className={ReportModalCSS.reportCategory}>
                        <h5>어떤 유형으로 신고하시겠습니까?&nbsp;&nbsp;&nbsp;</h5>
                        <select name='reportCategory' required onChange={onChangeHandler}>
                            <option value="1">부적절한 컨텐츠</option>
                            <option value="2">도배</option>
                            <option value="3">스팸/광고</option>
                            <option value="4">기타</option>
                        </select>
                    </div>
                </div>
                <div className={ReportModalCSS.downDiv}>
                    <div className={ReportModalCSS.reportContent}>
                        <h5>신고 내용을 작성해주세요.</h5>
                    </div>
                    <textarea className={ReportModalCSS.textArea} name='reportContent' onChange={onChangeHandler} required></textarea>
                    <div className={ReportModalCSS.submitBtn} onClick={onClickCrewReportHandler}>
                        제출
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CrewReportModal;