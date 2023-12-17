import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { callAdminLoginAPI } from "../../apis/AdminAPICalls";
import { Navigate } from "react-router-dom";
import styles from "./AdminLogin.module.css";

function AdminLogin() {
  const dispatch = useDispatch();
  const loginAdmin = useSelector((state) => state.adminReducer);
  const navigate = useNavigate();

  const onClickLoginHandler = () => {
    dispatch(callAdminLoginAPI({ form: form }));
  };

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [form, setForm] = useState({
    adminId: "",
    adminPassword: "",
  });

  useEffect(() => {
    if (loginAdmin.status === 200) {
      console.log("[Login] Login SUCCESS {}", loginAdmin);
      navigate("/admin/notice", { replace: true });
    }
  }, [loginAdmin]);

  if (loginAdmin.length > 0) {
    console.log("[Login] Login is already authenticated by the server");
    return <Navigate to="/admin/notice" />;
  }

  return (
    <div className={styles["admin-login-container"]}>
      <div className={styles["admin-login-title"]}>관리자 로그인</div>
      <div className={styles["admin-input-container"]}>
        <label className={styles["admin-input-label"]}>아이디 :</label>
        <input
          className={styles["admin-input"]}
          type="text"
          name="adminId"
          onChange={onChangeHandler}
        />
      </div>
      <div className={styles["admin-input-container"]}>
        <label className={styles["admin-input-label"]}>비밀번호 :</label>
        <input
          className={styles["admin-input"]}
          type="password"
          name="adminPassword"
          onChange={onChangeHandler}
        />
      </div>
      <button
        className={styles["admin-login-button"]}
        onClick={onClickLoginHandler}
      >
        로그인
      </button>
    </div>
  );
}

export default AdminLogin;
