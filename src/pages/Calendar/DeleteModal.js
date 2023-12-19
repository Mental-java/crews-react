import DeleteModalCSS from "./DeleteModal.module.css";
import {useDispatch} from "react-redux";

import {
    callDeleteSingleCalendarAPI
} from "../../apis/SingleCalendarAPICalls";

function DeleteModal({setDeleteModal, groupId, userId}) {

    const dispatch = useDispatch();

    const onClickDeleteHandler = () => {

        dispatch(callDeleteSingleCalendarAPI({
            userId: userId,
            groupId: groupId
        }));

        alert('일정을 삭제했습니다.');
        window.location.reload();
    }


    return(

        <div className={DeleteModalCSS.modal}>
            <div className={DeleteModalCSS.modalContainer}>
                <div className={DeleteModalCSS.infoDiv}>
                    정말 이 일정을 삭제하시겠습니까?
                </div>
                <div className={DeleteModalCSS.btnDiv}>
                    <div
                        className={DeleteModalCSS.deleteBtn}
                        onClick={onClickDeleteHandler}
                    >
                        삭제
                    </div>
                    <div
                        className={DeleteModalCSS.cancleBtn}
                        onClick={() => setDeleteModal(false)}
                    >
                        취소
                    </div>
                </div>
            </div>
        </div>

    )
}
export default DeleteModal