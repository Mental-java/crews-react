import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    callAdminLoginAPI
} from "../../apis/AdminAPICalls";
import { Navigate } from "react-router-dom";

function AdminLogin() {

    const dispatch = useDispatch();
    const loginAdmin = useSelector(state => state.adminReducer);
    const navigate = useNavigate();


    const onClickLoginHandler = () => { 
        dispatch(callAdminLoginAPI({	// 로그인
            form: form
        }));
    }

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const [form,setForm] = useState({
        adminId: '',
        adminPassword: ''
    });

    useEffect(() => {
        if(loginAdmin.status === 200){
            console.log("[Login] Login SUCCESS {}", loginAdmin);
            navigate("/admin/notice", { replace: true });
        }
    }
    ,[loginAdmin]);

    // 로그인 상태일 시 로그인페이지로 접근 방지
    if(loginAdmin.length > 0) {
        console.log("[Login] Login is already authenticated by the server");        
        return <Navigate to="/admin/notice"/>
    }


    return (
        <>
            <div>
                <div>
                    관리자 로그인
                </div>
                <div>
                    아이디 :
                    <input 
                    type="text" 
                    name='adminId'
                    onChange={ onChangeHandler }/>
                </div>
                <div>
                    비밀번호 :
                    <input 
                    type="text" 
                    name='adminPassword'
                    onChange={ onChangeHandler }/>
                </div>
                <button
                    onClick={ onClickLoginHandler }
                >
                    로그인
                </button>
            </div>
        </>
    )
}

export default AdminLogin;