import { useState, useEffect } from 'react';
import styles from './CrewSearch.module.css';
import {NavLink, Link, Outlet, useNavigate} from 'react-router-dom';
import CrewSearchAll from "./CrewSearchAll";
import CrewSearchExercise from "./CrewSearchExercise";
import CrewSearchStudy from "./CrewSearchStudy";
import CrewSearchHabit from "./CrewSearchHabit";
import CrewSearchEtc from "./CrewSearchEtc";
import CrewSearchByValueAboutCrewName from "./CrewSearchByValueAboutCrewName";

function CrewSearchPage() {

    const [search, setSearch] = useState('');
    const [querySearch, setQuerySearch] = useState('');
    const navigate = useNavigate();

    const onSearchChangeHandler = (e) => {
        setSearch(e.target.value);
    }

    const onEnterKeyHandler = (e) => {
        if(e.key == 'Enter') {
            console.log('Enter Key', search);

            setQuerySearch(`?s=${search}`);
            setSelectedCategory('검색');
            setSearch('');
        }

    }


    const [selectedCategory, setSelectedCategory] = useState('전체');
    const [selectedStatus, setSelectedStatus] = useState('모집중');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        console.log(selectedCategory);
    };

    const handleStatusClick = (status) => {
        setSelectedStatus(status);
    };

    let component;
    switch (selectedCategory) {
        case '전체':
            component = <CrewSearchAll />;
            break;
        case '운동':
            component = <CrewSearchExercise />;
            break;
        case '공부':
            component = <CrewSearchStudy />;
            break;
        case '습관':
            component = <CrewSearchHabit />;
            break;
        case '기타':
            component = <CrewSearchEtc />;
            break;
        case '검색':
            component = <CrewSearchByValueAboutCrewName querySearch={querySearch}/>;
            break;
    }

    return (
        <div className={styles.divMain}>
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
                            <input
                                type="text"
                                placeholder="검색어를 입력하세요"
                                value={search}
                                onKeyUp={onEnterKeyHandler}
                                onChange={onSearchChangeHandler}
                            />
                            <button>검색</button>
                        </div>
                    </div>

                    <div className={styles.recruitmentMain}>
                        <div className={styles.recruitmentStatusDiv}>
                            {/*<ul className={styles.recruitmentStatus}>*/}
                            {/*    {['모집중', '모집종료'].map((status) => (*/}
                            {/*        <li*/}
                            {/*            key={status}*/}
                            {/*            className={selectedStatus === status ? styles.selected : ''}*/}
                            {/*            onClick={() => handleStatusClick(status)}*/}
                            {/*        >*/}
                            {/*            {status}*/}
                            {/*        </li>*/}
                            {/*    ))}*/}
                            {/*</ul>*/}
                        </div>
                        <div className={styles.createCrewDiv}>
                            <Link to="/main/createcrew" className={styles.createCrewButton}>
                                + 크루 만들기
                            </Link>
                        </div>
                    </div>
                    {component}
                </section>
            </main>
        </div>
    );
}
export default CrewSearchPage;
