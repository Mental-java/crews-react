import { combineReducers } from 'redux';
import noticeReducer from './NoticeModule';
import myPageReducer from './MyPageModule';
import LoginReducer from './LoginModule';
import crewSearchListReducer from "./CrewSearchModule";
import myCalendarReducer from "./MyCalendarModule";
import crewListReducer from './CrewListModule';
import reportReducer from "./ReportModule";
import crewReducer from "./CrewModule";
import crewIntroListReducer from "./CrewIntroModule";
import endCrewListReducer from './EndCrewModule';
import crewUserListReducer from './CrewUserModule';
import crewCertificationListReducer from "./CrewCertificationModule";
import adminReducer from "./AdminModule";
import crewCheckReducer from "./CrewCheckModule";
import crewPageReducer from "./CrewPageModule";
import commentReducer from './CommentModule';
import adminUserReducer from './AdminUserListModule';
import userReducer from "./UserModule";

// 항상 새로운 모듈을 추가하면 까먹지말고 등록을 해줘야한다.
// 여기에 추가하지 않으면 상태관리 대상에서 제외된다.
const rootReducer = combineReducers({
    noticeReducer,
    myPageReducer,
    LoginReducer,
    crewSearchListReducer,
    myCalendarReducer,
    crewListReducer,
    reportReducer,
    crewReducer,
    crewIntroListReducer,
    endCrewListReducer,
    crewUserListReducer,
    crewCertificationListReducer,
    adminReducer,
    crewCheckReducer,
    crewPageReducer,
    commentReducer,
    adminUserReducer,
    userReducer
});

export default rootReducer;