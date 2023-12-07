import NavBarCSS from "./NavBar.module.css";

function CrewListHandler({ crewlist : {user,crew,approvalStatus}}){
    return(
        <>
            <li className={NavBarCSS.myCrewList}><a className={NavBarCSS.myCrewEffect}>{crew.crewName}</a></li>
        </>
    )
}

export default CrewListHandler;