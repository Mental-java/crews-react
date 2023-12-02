import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginHandler = (props) => {

    const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get("code");

    useEffect(() => {
        const kakaoLogin = async() => {
            await axios({
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=utf-8", 
                    "Accept": "*/*",
                    "Access-Control-Allow-Origin": "*" 
                  },
            }).then((res) => {
                console.log(res);
                navigate("/main");
            });
        };
        kakaoLogin();
    },[props.history]);

    return(
        <>
        <h1> 로그인 중 입니다.</h1>
        </>
    )

}

export default LoginHandler;