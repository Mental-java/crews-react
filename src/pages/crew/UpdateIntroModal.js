import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import UpdateIntroModalCSS from "./UpdateIntroModal.module.css";

import {callCrewIntroUpdateAPI} from "../../apis/CrewIntroAPICalls";

function UpdateIntroModal({crewIntro}) {

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
                <div className={UpdateIntroModalCSS.title}>
                    소개글 수정
                </div>
                <div className={UpdateIntroModalCSS.textbox}>
                    <input type="text" name="introduction" value={form.introduction} onChange={onChangeHandler}/>
                </div>
                <div className={UpdateIntroModalCSS.btn}>
                    <button onClick={onCilckUpdateIntroHandler}>업데이트</button>
                </div>
            </div>
        </div>

    )

}
export default UpdateIntroModal;