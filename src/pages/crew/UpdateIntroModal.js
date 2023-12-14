import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import UpdateIntroModalCSS from "./UpdateIntroModal.module.css";

import {callCrewIntroUpdateAPI} from "../../apis/CrewIntroAPICalls";

function UpdateIntroModal({ setIntroModal, crewIntro }) {

    const dispatch = useDispatch();
    const params = useParams();

    const [form, setForm] = useState({
        crewId: params.crewId,
        introduction: crewIntro
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log("바뀐값", form.introduction);
    };

    const onCilckUpdateIntroHandler = () => {

        dispatch(callCrewIntroUpdateAPI({
            form: form
        }));

        window.location.reload();

    }

    return(
        <div className={UpdateIntroModalCSS.modal}>
            <div className={UpdateIntroModalCSS.modalContainer}>
                <div className={UpdateIntroModalCSS.closeBtn} onClick={() => setIntroModal(false)}>X</div>
                <div className={UpdateIntroModalCSS.title}>
                    소개글 수정
                </div>
                <br/><br/>
                <div>
                    소개글을 입력하세요
                </div>
                <div >
                    <textarea className={UpdateIntroModalCSS.textbox} type="text" name="introduction" value={form.introduction} onChange={onChangeHandler}/>
                </div>
                <div onClick={onCilckUpdateIntroHandler} className={UpdateIntroModalCSS.btn}>업데이트</div>
            </div>
        </div>

    )

}
export default UpdateIntroModal;