import CreateCrewCSS from './CreateCrew.module.css';
import {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import {
    callCrewRegistAPI
} from "../../apis/CrewAPICalls";

function CreateCrew() {

    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const myCrew = useSelector(state => state.crewSearchListReducer);

    const user = useSelector(state => state.LoginReducer);
    const loginUser = user.userData;

    const today = new Date().toLocaleDateString('en-CA');

    const [form, setForm] = useState( {
        crewName: '',
        captain: {userId: loginUser && loginUser.data ? loginUser.data.userId : null},
        crewCategoryCode: {categoryCode: ''},
        startDate: '',
        endDate: '',
        crewRecruitmentPost: '',
        crewRecruitmentContent: ''
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        if (name === 'categoryCode') {
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

    const onClickCrewRegistrationHandler = (e) => {

        console.log('[CrewRegistration] onClickCrewRegistrationHandler');

        if(form.crewName === ''){
            alert('크루 이름을 입력해주세요.');
            return;
        }  else if(form.startDate === '') {
            alert('시작 날짜를 입력해주세요.');
            return;
        } else if(form.endDate === ''){
            alert('종료 날짜를 입력해주세요.');
            return;
        } else if(form.crewRecruitmentContent === ''){
            alert('모집글 내용을 입력해주세요.');
            return;
        } else if(form.crewRecruitmentPost === ''){
            alert('모집글 제목을 입력해주세요.');
            return;
        }

        console.log(form);

        dispatch(callCrewRegistAPI( {
            form: form
        }));

        alert('크루 등록 성공');
        navigate(`/main/crewsearch`, {replace: true});
        window.location.reload();
    }

    return (
        <div className={CreateCrewCSS.main}>
            <form className={CreateCrewCSS.formDiv}>
                <div className={CreateCrewCSS.categoryDiv}>
                    <h4 className={CreateCrewCSS.radioH}>크루 카테고리 선택</h4>
                    <div className={CreateCrewCSS.radioDiv}>
                        <label><input onChange={onChangeHandler} type="radio" name="categoryCode" value="1" defaultChecked/>운동</label>
                        <label><input onChange={onChangeHandler} type="radio" name="categoryCode" value="2" />공부</label>
                        <label><input onChange={onChangeHandler} type="radio" name="categoryCode" value="3" />습관</label>
                        <label><input onChange={onChangeHandler} type="radio" name="categoryCode" value="4" />기타</label>
                    </div>
                </div>
                <div className={CreateCrewCSS.nameDiv}>
                    <h4 className={CreateCrewCSS.nameH}>크루 이름</h4>
                    <input
                        className={CreateCrewCSS.nameInput}
                        type="text"
                        name="crewName"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className={CreateCrewCSS.dateDiV}>
                    <h4 className={CreateCrewCSS.startH}>시작 날짜</h4>
                    <input
                        className={CreateCrewCSS.startDate}
                        type="date"
                        name="startDate"
                        min={today}
                        onChange={onChangeHandler}
                    />
                    <h4 className={CreateCrewCSS.endH}>종료 날짜</h4>
                    <input
                        className={CreateCrewCSS.endDate}
                        type="date"
                        name="endDate"
                        min={form.startDate}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className={CreateCrewCSS.postDiv}>
                    <h4 className={CreateCrewCSS.postH}>모집글 제목</h4>
                    <input
                        className={CreateCrewCSS.postInput}
                        type="text"
                        name="crewRecruitmentPost"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className={CreateCrewCSS.contentDiv}>
                    <h4 className={CreateCrewCSS.contentH}>모집글 내용</h4>
                    <textarea
                        className={CreateCrewCSS.contentArea}
                        name="crewRecruitmentContent"
                        onChange={onChangeHandler}
                        value={form.crewRecruitmentContent}
                    />
                </div>
                <div className={CreateCrewCSS.btnDiv}>
                    <button className={CreateCrewCSS.registBtn} onClick={ onClickCrewRegistrationHandler }>생성하기</button>
                    &nbsp;&nbsp;
                    <button className={CreateCrewCSS.backBtn} onClick={() => navigate(`/main/crewsearch`)}>뒤로가기</button>
                </div>
            </form>

        </div>
    );
}

export default CreateCrew;
