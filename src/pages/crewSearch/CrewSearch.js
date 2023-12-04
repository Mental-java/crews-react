import { useState, useEffect } from 'react';
import styles from './CrewSearch.module.css';
import { Link } from 'react-router-dom';
import CrewSearchHandler from "../../component/pages/CrewSearchHandler";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import {
    callCrewSearchListAPI
} from "../../apis/CrewSearchAPICalls";
import {GET_CREWSEARCHLIST} from "../../module/CrewSearchModule";

function CrewSearch() {
    const dispatch = useDispatch();
    const crewSearchs = useSelector(state => state.crewSearchListReducer);
    const crewSearchList = crewSearchs.data;

    const pageInfo = crewSearchs.pageInfo;

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
            dispatch(callCrewSearchListAPI({
                currentPage: currentPage
            }));
        }
        ,[currentPage]
    );

    const [selectedCategory, setSelectedCategory] = useState('전체');
    const [selectedStatus, setSelectedStatus] = useState('모집중');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleStatusClick = (status) => {
        setSelectedStatus(status);
    };

    return (
        <div>
            <main>
                <section>
                    <div className={styles['crew-search']}>
                        <ul className={styles['crew-categories']}>
                            {['전체', '운동', '공부', '습관', '기타'].map((category) => (
                                <li
                                    key={category}
                                    className={selectedCategory === category ? styles['selected'] : ''}
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                        <div className={styles['search-bar']}>
                            <input type="text" placeholder="크루 검색" />
                            <button>검색</button>
                        </div>
                    </div>

                    <div className={styles['recruitment']}>
                        <ul className={styles['recruitment-status']}>
                            {['모집중', '모집종료'].map((status) => (
                                <li
                                    key={status}
                                    className={selectedStatus === status ? styles['selected'] : ''}
                                    onClick={() => handleStatusClick(status)}
                                >
                                    {status}
                                </li>
                            ))}
                        </ul>
                        <Link to="/createcrew" className={styles['create-crew-button']}>
                            크루 만들기
                        </Link>
                    </div>
                    <div className="Posting-zone">
                        {
                            Array.isArray(crewSearchList) && crewSearchList.map((crew) => (<CrewSearchHandler key={ crew.crewId } crew={ crew }/>))
                        }
                    </div>
                </section>
            </main>
        </div>
    );
}

export default CrewSearch;
