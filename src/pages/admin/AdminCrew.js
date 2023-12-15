import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import AdminCrewHandler from "./AdminCrewHandler";

import {
    callAdminCrewListAPI
} from "../../apis/AdminAPICalls";

function AdminCrew() {

    const dispatch = useDispatch();
    const admin = useSelector(state => state.adminReducer);
    const crewList = admin.data;

    const pageInfo = admin.pageInfo;

    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    const pageNumber = [];
    if(pageInfo){
        for(let i =1; i <= pageInfo.pageEnd; i++){
            pageNumber.push(i);
        }
    }

    useEffect(
        () => {
            setStart((currentPage - 1) * 5);
            dispatch(callAdminCrewListAPI({
                currentPage: currentPage
            }));
        }
        ,[currentPage]
    );


    return (
        <>
            <div>
                <div>
                    <table>
                        {
                            Array.isArray(crewList) && crewList.map((crew) => (<AdminCrewHandler key={ crew.crewId } crew={ crew }/>))
                        }
                    </table>
                </div>
            </div>
        </>
    )
}

export default AdminCrew;