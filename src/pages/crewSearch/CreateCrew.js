import CreateCrewCSS from './CreateCrew.module.css';
import {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import {
    callCrewRegistAPI
} from "../../apis/CrewSearchAPICalls";

function CreateCrew() {

    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const myCrew = useSelector(state => state.crewSearchListReducer);

    const user = useSelector(state => state.LoginReducer);
    const loginUser = user.userData;

    const today = new Date().toLocaleDateString('en-CA');

    const [form, setFrom] = useState( {
        crewName: '',
        captain: {userId: loginUser && loginUser.data ? loginUser.data.userId : null},
        introduction: '',
        crewCategoryCode: {categoryCode: ''},
        startDate: '',
        endDate: '',
        crewRecruitmentPost: '',
        crewRecruitmentContent: ''
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        if (name === 'categoryCode') {
            setFrom({
                ...form,
                crewCategoryCode: { categoryCode: parseInt(value) }
            });
        } else {
            setFrom({
                ...form,
                [name]: value
            });
        }
    };

    useEffect(() => {
        console.log(form);
    }, [form]);

    const onClickCrewRegistrationHandler = () => {

        console.log('[CrewRegistration] onClickCrewRegistrationHandler');

        dispatch(callCrewRegistAPI( {
            form: form
        }));

        
        alert('크루 등록 성공');
        navigate(`/main/crewsearch`, {replace: true});
    }

    return (
        <div>
            <main>
                <section>
                    <h1>크루 만들기</h1>

                    <form>
                        <p>크루 카테고리 선택</p>
                        <label><input className="radio-input" onChange={onChangeHandler} type="radio" name="categoryCode" value="1"/>운동</label>
                        <label><input className="radio-input" onChange={onChangeHandler} type="radio" name="categoryCode" value="2"/>공부</label>
                        <label><input className="radio-input" onChange={onChangeHandler} type="radio" name="categoryCode" value="3"/>습관</label>
                        <label><input className="radio-input" onChange={onChangeHandler} type="radio" name="categoryCode" value="4"/>기타</label>


                        <div className="team-and-date">
                            <div className="team-name">
                                <p>크루 이름</p>
                                <input type="text" name="crewName" onChange={onChangeHandler} required />
                            </div>

                            <div className="date-input">
                                <p>활동기간</p>
                                <input type="date" name="startDate" min={today} onChange={onChangeHandler} required />
                                <span className="date-separator">&nbsp; ~ &nbsp;</span>
                                <input type="date" name="endDate" min={today} onChange={onChangeHandler} required />
                            </div>
                        </div>

                        <div className="title-and-status">
                            <div className="title-input">
                                <p>모집글 제목</p>
                                <input
                                    type="text"
                                    name="crewRecruitmentPost"
                                    onChange={onChangeHandler}
                                    required
                                />
                            </div>

                        </div>

                        <div className="recruitment-content">
                            <div className="left-content">
                                <p>모집 내용</p>
                                <textarea
                                    name="crewRecruitmentContent"
                                    onChange={onChangeHandler}
                                    required
                                    rows="6"
                                    cols="30"
                                ></textarea>
                            </div>
                        </div>
                        <div className="submit-button">
                            <button onClick={ onClickCrewRegistrationHandler }>등록</button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default CreateCrew;
