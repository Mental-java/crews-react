import PostCSS from "./WritePost.module.css";
import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import {
    callRegistCertificationPostAPI
} from "../../apis/CrewPageAPICalls";

function WritePost() {

    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    const[form, setForm] = useState({
        postTitle: '',
        postContent: ''
    });

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const onClickCrewPostRegistHandler = () => {

        console.log('[onClickCrewPostRegistHandler] start');

        if (form.postTitle === ''){
            alert('제목을 입력해주세요.');
            return;
        } else if (form.postContent === ''){
            alert('내용을 입력해주세요.');
            return;
        }

        dispatch(callRegistCertificationPostAPI({
            crewId: params.crewId,
            form: form
        }));

        alert('인증게시글을 등록하셨습니다.');
        navigate(`/main/crewcertification/${params.crewId}`);
        window.location.reload();
    }


    return(
        <div>
            <div>
                <p className={PostCSS.post}>게시글 작성</p>
            </div>
            <hr/>
            <div className="post-title">
            <div className={PostCSS.label}>제목</div>
                <input
                    type="text"
                    name="postTitle"
                    className={PostCSS.inputField}
                    onChange={onChangeHandler}
                />
            </div>
            <div className="post-content">
            <div className={PostCSS.label}>내용</div>
                <textarea
                    rows="15"
                    cols="100"
                    name="postContent"
                    className={PostCSS.textareaField}
                    onChange={onChangeHandler}
                />
            </div>
            <div
                className={PostCSS.button}
                onClick={onClickCrewPostRegistHandler}
            >
                등록
            </div>

        </div>
    );

}

export default WritePost;