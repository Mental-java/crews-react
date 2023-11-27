import NoticeCSS from "./Notice.module.css";

function Notice(){
    
    return(
        
            <div className={NoticeCSS.noticeMain}>
                <div className={NoticeCSS.informationBar}>
                    <table>
                        <tr>
                            <th className={NoticeCSS.barContent} width="100">번호</th>
                            <th className={NoticeCSS.barContent} width="600">제목</th>
                            <th className={NoticeCSS.barContent} width="200">작성자</th>
                            <th className={NoticeCSS.barContent} width="200">조회수</th>
                            <th className={NoticeCSS.barContent} width="200">작성일</th>
                        </tr>
                    </table>
                </div>
            </div>
        
    )
}

export default Notice;