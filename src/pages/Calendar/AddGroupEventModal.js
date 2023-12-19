import React, {useState} from "react";
import {useDispatch} from "react-redux";
import AddGroupEventModalCSS from "./AddGroupEventModal.module.css"
import CreateModalCSS from "./AddEventModal.module.css";

import {
    callRegistSingleCalendarAPI
} from "../../apis/SingleCalendarAPICalls";

function AddGroupEventModal({setAddSingleEventOpen, userId}) {

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        title: '',
        firstDate: '',
        lastDate: '',
        groupId: '',
        repeatNum: 0
    })

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        if (name === 'repeatNum') {
            setForm({
                ...form,
                repeatNum: parseInt(value)
            });
        } else {
            setForm({
                ...form,
                [name]: value
            });
        }
    };

    const onClickRegistSingleCalendarHandler = () =>{

        console.log('테스트 폼 : ', form);

        dispatch(callRegistSingleCalendarAPI({
            form: form,
            userId: userId
        }));
        alert('일정을 동록했습니다.');
        window.location.reload();
    }


    return (
        <div className={AddGroupEventModalCSS.modal}>
            <div className={AddGroupEventModalCSS.modalContainer}>
                <div className={AddGroupEventModalCSS.modalContent}>
                    <div className={`${CreateModalCSS.updateInfo} ${CreateModalCSS.originInfo}`}>
                        <h2>새 일정 추가</h2>
                        <input
                            type="text"
                            placeholder="제목을 입력하세요"
                            name="title"
                            onChange={onChangeHandler}
                        />
                        <label>
                            시작일 :&nbsp;
                            <input
                                type="date"
                                placeholder="시작일"
                                name="firstDate"
                                onChange={onChangeHandler}
                            />
                        </label>
                        <br/>
                        <label>
                            종료일 :&nbsp;
                            <input
                                type="date"
                                placeholder="종료일"
                                name="lastDate"
                                onChange={onChangeHandler}
                            />
                        </label>

                        <input
                            type="text"
                            placeholder="반복횟수"
                            name="repeatNum"
                            onChange={onChangeHandler}
                        />
                        <input
                            type="text"
                            placeholder="일정 이름"
                            name="groupId"
                            onChange={onChangeHandler}
                        />
                        <button onClick={onClickRegistSingleCalendarHandler}>추가</button>
                    </div>
                    <button
                        className={CreateModalCSS.closeButton}
                        onClick={() => setAddSingleEventOpen(false)}
                    >
                        X
                    </button>
                </div>
            </div>
        </div>
    )
}
export default AddGroupEventModal