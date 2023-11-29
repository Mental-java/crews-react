import MyPageCSS from "./MyPage.module.css";

function MyPage(){

    return(
        <>
            <div>
                <div className={MyPageCSS.upDiv}>
                    <div className={MyPageCSS.nicknameDiv}>
                        <img src="img/level-image.png" className={MyPageCSS.levelImage}/>
                            <p className={MyPageCSS.nickname}>삼육이 <img src="img/edit_button.png" className={MyPageCSS.editImage}/></p>
                    </div>
                    <div className={MyPageCSS.spaceDiv}></div>
                    <div className={MyPageCSS.recodeDiv}>
                        <div className={MyPageCSS.tableTitle}>
                            <p className={MyPageCSS.recodeTitle}>&nbsp;&nbsp;나의 활동</p>
                        </div>
                        <table className={MyPageCSS.recodeTable}>
                            <tr className={MyPageCSS.recodeTr}>
                                <th className={MyPageCSS.recodeTh} width="120">몸짱크루</th>
                                <th className={MyPageCSS.recodeTh} width="50"><p className={MyPageCSS.category}>운동</p></th>
                                <th className={MyPageCSS.recodeTh} width="140">2023.9.12~2023.10.19</th>
                                <th className={MyPageCSS.recodeTh}><p className={MyPageCSS.rate}>평가하기</p></th>
                            </tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                        </table>
                    </div>
                </div>
                <div className={MyPageCSS.downDiv}>
                    <div className>
                        <p className={MyPageCSS.listTitle}>내가 작성한 글</p>
                    </div>
                    <div className={MyPageCSS.informationBar}>
                        <table>
                            <tr>
                                <th className={MyPageCSS.barContent} width="100">번호</th>
                                <th className={MyPageCSS.barContent} width="700">제목</th>
                                <th className={MyPageCSS.barContent} width="200">조회수</th>
                                <th className={MyPageCSS.barContent} width="300">작성일</th>
                            </tr>
                        </table>
                    </div>
                    <div className={MyPageCSS.myList}>
                        <table className={MyPageCSS.myListTable}>
                            <tr className={MyPageCSS.noticeList}>
                                <th className={MyPageCSS.listContent} width="100">&nbsp;1</th>
                                <th className={MyPageCSS.listContent} width="700">제명호 산책해요</th>
                                <th className={MyPageCSS.listContent} width="200">&nbsp;316</th>
                                <th className={MyPageCSS.listContent} width="300">2023.10.24</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )

}

export default MyPage;