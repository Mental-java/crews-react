import CrewSearchHandler from "../../component/pages/CrewSearchHandler";
import styles from "./CrewSearch.module.css";
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import queryString from 'query-string';

import {
    callCrewSearchByValueAboutCrewNameAPI
} from "../../apis/CrewSearchAPICalls";

function CrewSearchByValueAboutCrewName({querySearch}) {

    const dispatch = useDispatch();
    const searchResult = useSelector(state => state.crewSearchListReducer);
    const resultList = searchResult.data;

    const pageInfo = searchResult.pageInfo;

    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    const pageNumber = [];
    if (pageInfo) {
        for (let i = 1; i <= pageInfo.pageEnd; i++) {
            pageNumber.push(i);
        }
    }

    const {s} = queryString.parse(querySearch);

    // s가 변경될 때마다 currentPage를 1로 설정
    // s가 변경될 때마다 currentPage를 1로 설정하고, API를 호출
    useEffect(
        () => {
            setCurrentPage(1);
            setStart(0);
            dispatch(callCrewSearchByValueAboutCrewNameAPI({
                search: s,
                currentPage: 1
            }));
        },
        [s]
    );

// currentPage가 변경될 때마다 API를 호출 (단, s가 변경될 때는 제외)
    useEffect(
        () => {
            if (currentPage !== 1) { // s가 변경될 때는 currentPage가 1로 설정되므로, 이 경우는 제외
                setStart((currentPage - 1) * 5);
                dispatch(callCrewSearchByValueAboutCrewNameAPI({
                    search: s,
                    currentPage: currentPage
                }));
            }
        },
        [currentPage]
    );

    return (

        <>
            <div>
                <div className={styles.crewListMain}>
                    <table>
                        {
                            Array.isArray(resultList) && resultList.map((crew) => (<CrewSearchHandler key={ crew.crewId } crew={ crew }/>))
                        }
                    </table>
                </div>
            </div>

            <div className={styles.btnMain}>
                <div className={styles.btnDiv}>
                    {Array.isArray(resultList) &&
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={styles.pagingBtn}
                        >
                            &lt;
                        </button>
                    }
                    {pageNumber.map((num) => (
                        <li key={num} onClick={() => setCurrentPage(num)}>
                            <button
                                style={ currentPage === num ? {background : '#000928'} : null}
                                className={styles.pagingBtn}
                            >
                                {num}
                            </button>
                        </li>
                    ))}
                    { Array.isArray(resultList) &&
                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === pageInfo.pageEnd || pageInfo.total ==0}
                            className={styles.pagingBtn}
                        >
                            &gt;
                        </button>
                    }
                </div>
            </div>
        </>
    );

}
export default CrewSearchByValueAboutCrewName;