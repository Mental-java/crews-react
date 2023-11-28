import React from 'react';

function CreateCrew() {
    return (
        <div>
            <main>
                <section>
                    <h1>크루 만들기</h1>

                    <form>
                        <p>크루 유형:</p>

                        <input
                            className="radio-input"
                            type="radio"
                            id="운동"
                            name="crewType"
                            value="운동"
                        />
                        <label className="radio-label" htmlFor="운동">
                            운동
                        </label>

                        <input
                            className="radio-input"
                            type="radio"
                            id="공부"
                            name="crewType"
                            value="공부"
                        />
                        <label className="radio-label" htmlFor="공부">
                            공부
                        </label>

                        <input
                            className="radio-input"
                            type="radio"
                            id="습관"
                            name="crewType"
                            value="습관"
                        />
                        <label className="radio-label" htmlFor="습관">
                            습관
                        </label>

                        <input
                            className="radio-input"
                            type="radio"
                            id="기타"
                            name="crewType"
                            value="기타"
                        />
                        <label className="radio-label" htmlFor="기타">
                            기타
                        </label>

                        <div className="team-and-date">
                            <div className="team-name">
                                <p>팀 이름:</p>
                                <input type="text" id="teamName" name="teamName" required />
                            </div>

                            <div className="date-input">
                                <p>날짜:</p>
                                <input type="date" id="startDate" name="startDate" required />
                                <span className="date-separator">~</span>
                                <input type="date" id="endDate" name="endDate" required />
                            </div>
                        </div>

                        <div className="title-and-status">
                            <div className="title-input">
                                <p>공고 제목:</p>
                                <input
                                    type="text"
                                    id="advertisementTitle"
                                    name="advertisementTitle"
                                    required
                                />
                            </div>

                            <div className="status-select">
                                <p>모집 상태:</p>
                                <select
                                    id="recruitmentStatus"
                                    name="recruitmentStatus"
                                >
                                    <option value="모집중">모집중</option>
                                    <option value="모집 종료">모집 종료</option>
                                </select>
                            </div>
                        </div>

                        <div className="recruitment-content">
                            <div className="left-content">
                                <p>모집 내용:</p>
                                <textarea
                                    id="recruitmentContent"
                                    name="recruitmentContent"
                                    required
                                    rows="6"
                                    cols="30"
                                ></textarea>
                            </div>
                        </div>
                        <div className="submit-button">
                            <button type="submit">등록</button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default CreateCrew;
