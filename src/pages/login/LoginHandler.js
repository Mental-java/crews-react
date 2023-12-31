import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { LOGIN_SUCCESS } from "../../module/LoginModule";

const LoginHandeler = (props) => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  const dispatch = useDispatch();

  const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;

  useEffect(() => {
    const kakaoLogin = async () => {
      await axios({
        method: "GET",
        url: `http://localhost:8080/oauth?code=${code}`,
        headers: {
          "Content-Type": "application/json;charset=utf-8", //json형태로 데이터를 보내겠다는뜻
          "Access-Control-Allow-Origin": "*", //이건 cors 에러때문에 넣어둔것. 당신의 프로젝트에 맞게 지워도됨
        },
      }).then((res) => { //백에서 완료후 우리사이트 전용 토큰 넘겨주는게 성공했다면
        console.log(res);
        if(res.status == 200){
          window.localStorage.setItem("accesstoken",res.data.data.token);
          window.localStorage.setItem("nickname",res.data.data.nickname);
          window.localStorage.setItem("userId",res.data.data.userId);
        }
        dispatch({ type: LOGIN_SUCCESS, payload: res.data});

        console.log(LOGIN_SUCCESS);
       

        //로그인이 성공하면 이동할 페이지
        navigate("/main");
      });
    };
    kakaoLogin();
  }, [props.history,dispatch]);

  return (
    <div>
      <div>
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
        <div></div>
      </div>
    </div>
  );
};

export default LoginHandeler;