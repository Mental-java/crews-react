

function AdminLogin() {


    return (
        <>
            <div>
                <div>
                    관리자 로그인
                </div>
                <div>
                    아이디 :
                    <input type="text" name="adminId"/>
                </div>
                <div>
                    비밀번호 :
                    <input type="text" name="adminPassword"/>
                </div>
            </div>
        </>
    )
}

export default AdminLogin;