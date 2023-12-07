import LoginCSS from './Login.module.css';

import mainLogo from '../../img/crews-logo.png';
import kakaoBtn from '../../img/kakaoButton.png';

const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

function Login(){

    
    return(
        <>
            <div className={ LoginCSS.logoContainer }>
                <img src={mainLogo} alt="메인 로고" className={LoginCSS.mainLogo}/>
            </div>

            <div className={ LoginCSS.loginButton }>
                <a href={ KAKAO_AUTH_URL } >
                <img src={kakaoBtn} alt="카카오 버튼" className={LoginCSS.kakaoButton}/>
                </a> 
            </div>
        </>
    )
}

export default Login;