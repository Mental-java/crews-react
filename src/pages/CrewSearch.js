import React, { useState } from 'react';
import styles from './CrewSearch.module.css';

function CrewSearch() {
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
            <header>
                {/* Header content */}
            </header>
            <main>
                <aside>
                    {/* Sidebar content */}
                </aside>
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
                        <button className={styles['create-crew-button']} onClick={() => (window.location.href = 'create-crews.html')}>+크루 만들기</button>
                    </div>

                    <div className={styles['Posting-zone']}>
                        {/* Posting content */}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default CrewSearch;
