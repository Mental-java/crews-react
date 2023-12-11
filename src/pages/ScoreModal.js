import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScoreModalCSS from "./ScoreModal.module.css";
import diamondImage from "../img/diamond-image.png"; 

function ScoreModal({ setScoreModal,crewId }){

    // const dispatch = useDispatch();

    // useEffect(
    //     () => {
    //         dispatch(callCrewUserAPI({
    //             crewId: crewId
    //         }))
    //     }
    // )

    return(
            <div className={ScoreModalCSS.scoremodalcontainer}>
            <div className={ScoreModalCSS.scoremodalcontent}>
            <div>
                <div className={ScoreModalCSS.title}>
                    <h2> 크루원을 평가해주세요!</h2>
                </div>
                <div className={ScoreModalCSS.outline}>
                    <div className={ScoreModalCSS.maind}>
                        <div className={ScoreModalCSS.crewMember}>
                            남궁주형         
                            <div className={ScoreModalCSS.diamond}>
                                <img className={ScoreModalCSS.diaImg}src={diamondImage} alt="보석"/>
                                <button className={ScoreModalCSS.plusButton}>+</button>
                                <button className={ScoreModalCSS.minusButton}>-</button>
                            </div>
                            <hr/>
                        </div>
                    
                        <div className={ScoreModalCSS.close} onClick={() => setScoreModal(false)}>
                            확인
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
    )
    
    
}

export default ScoreModal;