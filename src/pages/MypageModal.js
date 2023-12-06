import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    callNickNameChangeAPI
} from '../apis/MyPageAPICalls'
import MypageModalCSS from "./MypageModal.module.css";

function MypageModal (nickname,userId,setMypageModal){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [newNickName, setNewNickName] = useState(null);
   

    const onClickNickNameHandler = () => {        
        console.log('닉네임변경 시작');        
                
        dispatch(callNickNameChangeAPI({	
            userId: userId,
            nickname: newNickName
        }));

        // setMypageModal(false);

        alert('닉네임 변경이 완료되었습니다.');

        navigate(`/main/mypage`, { replace: true});
        // window.location.reload();

    }

    const onChangeHandler = (e) => {
        setNewNickName(e.target.value);
    };

    return(
        <div className={MypageModalCSS.modal}>
            <div className={ MypageModalCSS.modalContainer }>
                <div className={ MypageModalCSS.productReviewModalDiv }>
                    <h1>닉네임 변경</h1>
                    <input 
                        type="text" 
                        value={newNickName}
                        placeholder="변경할 닉네임을 입력하세요" 
                        autoComplete='off'
                        onChange={ onChangeHandler }
                    />
                    
                            
                    <button
                        onClick={ onClickNickNameHandler }
                    >
                        닉네임 변경하기
                    </button>
                    <button
                        style={ { border: 'none', margin: 0, fontSize: '10px', height: '10px' } }
                        onClick={ () => setMypageModal(false) }
                    >
                        돌아가기
                    </button>
                </div>
            </div>
        </div>
    )

}

export default MypageModal;