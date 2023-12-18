import UserWarningModalCSS from "./UserWarningModal.module.css";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {
    callUpdateUserReportStatusZeroAPI
} from "../../apis/UserAPICalls";
import callLogoutAPI from "../../apis/LoginAPICalls";

function UserWarningModal({userId, setUserReportStatus}){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const data =
        '저희 크루즈 서비스를 이용해 주셔서 감사드립니다.\n' + '최근 사용자님의 비매너 행동으로 인한 신고가 접수 되었습니다.\n' + '이러한 행동은 서비스 이용 약관에 위배되며, 모든 사용자에게 쾌적한 환경을 제공하기 위한 저희의 노력에 방해가 됩니다.\n' +
        '\n' +
        '비매너 행동에는 욕설, 과도한 비판, 불필요한 분쟁을 일으키는 행동, 다른 사용자를 무시하거나 모욕하는 행동, 허위 정보를 퍼트리는 행동, 불법 광고 등이 포함됩니다. 저희는 이러한 행동을 적발한 사용자에게 경고를 주고, 계속해서 이러한 행동을 하는 사용자의 계정은 제한 또는 정지될 수 있음을 알려드립니다.\n' +
        '\n' +
        '저희 서비스는 모두가 서로를 존중하고, 건강한 커뮤니티 환경을 유지하는 곳이어야 합니다. 따라서, 다른 사용자에게 존중과 예의를 보여주는 것이 중요합니다.\n' + '\n' + '계속하시려면 다시 로그인 해주세요.';

    const [form, setForm] = useState({
        reportStatus: ''
    });

    const onClickReportStatusZeroHandler = () => {

        setForm({
            ...form,
            reportStatus: '0'
        });

        dispatch(callUpdateUserReportStatusZeroAPI({
            form: form,
            userId: userId
        }));
        setUserReportStatus(false);


        window.localStorage.removeItem('accessToken');
        //로그아웃
        dispatch(callLogoutAPI());

        alert('로그아웃이 되어 메인화면으로 이동합니다.');
        navigate("/", { replace: true })
        window.location.reload();
    }

    return (
        <div className={UserWarningModalCSS.modal}>
            <div className={UserWarningModalCSS.modalContainer}>
                <div className={UserWarningModalCSS.mainDiv}>
                    <div className={UserWarningModalCSS.warningDiv}>
                        <div className={UserWarningModalCSS.warning}>
                            경 고
                        </div>
                    </div>
                    <div className={UserWarningModalCSS.contentDiv}>
                        <div className={UserWarningModalCSS.content}>
                            {data}
                        </div>
                    </div>
                    <div
                        className={UserWarningModalCSS.okDiv}
                        onClick={onClickReportStatusZeroHandler}
                    >
                        재로그인
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserWarningModal;