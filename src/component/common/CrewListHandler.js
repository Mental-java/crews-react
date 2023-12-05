function CrewListHandler({ crewlist : {user,crew,approvalStatus}}){
    return(
        <>
            <li><a>{crew.crewName}</a></li>
        </>
    )
}

export default CrewListHandler;