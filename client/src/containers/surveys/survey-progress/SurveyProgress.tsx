import React, { useContext } from 'react';
import { SurveyProgressContext } from '../Surveys';
import './SurveyProgress.scss';

const SurveyProgress: React.FC = () => {
    const { totalQuestions, progressIndex, isCompleted } = useContext(SurveyProgressContext);
    return (
        <React.Fragment>
            {
                !isCompleted && (
                    <div className="survey__progress">{progressIndex} / {totalQuestions}</div>
                )
            }
            {
                isCompleted && (
                    <React.Fragment>
                        <h1>Survey complete</h1>
                        <button type="button" className="cta-button">
                            Send your answers
                        </button>
                    </React.Fragment>

                )
            }
        </React.Fragment>
    )
}

export default SurveyProgress;