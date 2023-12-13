import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import CrewUpdateModalCSS from "./CrewUpdateModal.module.css";

import {
    callCrewUpdateAPI
} from "../../apis/CrewAPICalls";

function CrewUpdateModal({crew, setCrewUpdateModal}) {

    const dispatch = useDispatch();

    const params = useParams();

    const today = new Date().toLocaleDateString('en-CA');

    const [form, setForm] = useState({
        crewId: crew.crewId,
        crewName: crew.crewName,
        crewCategoryCode: {categoryCode: crew.crewCategoryCode.categoryCode},
        startDate: crew.startDate,
        endDate: crew.endDate,
        crewRecruitmentPost: crew.crewRecruitmentPost,
        crewRecruitmentContent: crew.crewRecruitmentContent,
        recruitmentStatus: crew.recruitmentStatus
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        if (name === 'crewName' && value.length > 12) {
            alert('크루 이름은 최대 12글자까지 입력 가능합니다.');
            e.target.value = '';
        } else if (name === 'categoryCode') {
            setForm({
                ...form,
                crewCategoryCode: { categoryCode: parseInt(value) }
            });
        } else {
            setForm({
                ...form,
                [name]: value
            });
        }
    };

    const onClickCrewUpdateHandler = () => {

        alert('크루 정보를 수정하였습니다.');

        dispatch(callCrewUpdateAPI({
            form: form
        }));

        window.location.reload();
    }

    return(
        <div className={CrewUpdateModalCSS.modal}>
            <div className={CrewUpdateModalCSS.modalContainer}>
                <div className={CrewUpdateModalCSS.main}>
                    <form className={CrewUpdateModalCSS.formDiv}>
                        <div className={CrewUpdateModalCSS.closeBtn} onClick={() => setCrewUpdateModal(false)}>X</div>
                        <div className={CrewUpdateModalCSS.categoryDiv}>
                            <h4 className={CrewUpdateModalCSS.radioH}>크루 카테고리 선택</h4>
                            <div className={CrewUpdateModalCSS.radioDiv}>
                                <label><input onChange={onChangeHandler} type="radio" name="categoryCode" value="1" checked={form.crewCategoryCode.categoryCode === 1} />운동</label>
                                <label><input onChange={onChangeHandler} type="radio" name="categoryCode" value="2" checked={form.crewCategoryCode.categoryCode === 2}/>공부</label>
                                <label><input onChange={onChangeHandler} type="radio" name="categoryCode" value="3" checked={form.crewCategoryCode.categoryCode === 3}/>습관</label>
                                <label><input onChange={onChangeHandler} type="radio" name="categoryCode" value="4" checked={form.crewCategoryCode.categoryCode === 4}/>기타</label>
                            </div>
                        </div>
                        <div className={CrewUpdateModalCSS.nameDiv}>
                            <h4 className={CrewUpdateModalCSS.nameH}>크루 이름</h4>
                            <input
                                className={CrewUpdateModalCSS.nameInput}
                                type="text"
                                name="crewName"
                                value={form.crewName}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={CrewUpdateModalCSS.dateDiV}>
                            <h4 className={CrewUpdateModalCSS.startH}>시작 날짜</h4>
                            <input
                                className={CrewUpdateModalCSS.startDate}
                                type="date"
                                name="startDate"
                                value={form.startDate}
                                min={crew.startDate}
                                onChange={onChangeHandler}
                            />
                            <h4 className={CrewUpdateModalCSS.endH}>종료 날짜</h4>
                            <input
                                className={CrewUpdateModalCSS.endDate}
                                type="date"
                                name="endDate"
                                min={form.startDate}
                                value={form.endDate}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={CrewUpdateModalCSS.statusDiv}>
                            <h4 className={CrewUpdateModalCSS.statusH}>모집 상태</h4>
                            <div className={CrewUpdateModalCSS.statusRadio}>
                                <label><input onChange={onChangeHandler} type="radio" name="recruitmentStatus" value="1" checked={form.recruitmentStatus === "1"}/>모집중</label>
                                <label><input onChange={onChangeHandler} type="radio" name="recruitmentStatus" value="0" checked={form.recruitmentStatus === "0"}/>모집종료</label>
                            </div>
                        </div>
                        <div className={CrewUpdateModalCSS.postDiv}>
                            <h4 className={CrewUpdateModalCSS.postH}>모집글 제목</h4>
                            <input
                                className={CrewUpdateModalCSS.postInput}
                                type="text"
                                name="crewRecruitmentPost"
                                onChange={onChangeHandler}
                                value={form.crewRecruitmentPost}
                            />
                        </div>
                        <div className={CrewUpdateModalCSS.contentDiv}>
                            <h4 className={CrewUpdateModalCSS.contentH}>모집글 내용</h4>
                            <textarea
                                className={CrewUpdateModalCSS.contentArea}
                                name="crewRecruitmentContent"
                                onChange={onChangeHandler}
                                value={form.crewRecruitmentContent}
                            />
                        </div>
                        <button className={CrewUpdateModalCSS.updateBtn} onClick={onClickCrewUpdateHandler}>수정하기</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default CrewUpdateModal;