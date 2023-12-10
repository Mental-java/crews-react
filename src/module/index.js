import { combineReducers } from 'redux';
import noticeReducer from './NoticeModule';
import myPageReducer from './MyPageModule';
import LoginReducer from './LoginModule';
import crewSearchListReducer from "./CrewSearchModule";
import myCalendarReducer from "./MyCalendarModule";
import crewListReducer from './CrewListModule';
import reportReducer from "./ReportModule";
import crewReducer from "./CrewModule";

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
    crewReducer
});

export default rootReducer;