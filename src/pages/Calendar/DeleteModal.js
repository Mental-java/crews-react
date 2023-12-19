import DeleteModalCSS from "./DeleteModal.module.css";
import {useDispatch} from "react-redux";
import {useState} from "react";

import {
    callDeleteSingleCalendarAPI,
    callUpdateSingleCalendarAPI
} from "../../apis/SingleCalendarAPICalls";

function DeleteModal({setDeleteModal, groupId, userId, id, startDate, title}) {

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        singleCalendarId: id,
        startDate: startDate,
        title: title
    })

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
        console.log(form);
    }

    const onClickUpdateHandler = () => {

        dispatch(callUpdateSingleCalendarAPI({
            form: form
        }));

        alert('일정을 수정했습니다.');
        window.location.reload();
    }

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
                    <div className={DeleteModalCSS.titleDiv}>
                        <input
                            className={DeleteModalCSS.titleInput}
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className={DeleteModalCSS.startDiv}>
                        <input
                            className={DeleteModalCSS.startInput}
                            type="date"
                            name="startDate"
                            value={form.startDate}
                            onChange={onChangeHandler}
                        />
                    </div>
                </div>
                <div className={DeleteModalCSS.btnDiv}>
                    <div
                        className={DeleteModalCSS.updateBtn}
                        onClick={onClickUpdateHandler}
                    >
                        수정
                    </div>
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