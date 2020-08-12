import React, { useEffect } from 'react';
import { getSurveySuccess, fetchSurveys } from '../../store/survey/reducers/survey.reducers';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
interface IProps {
}
const Surveys: React.FC<IProps> = (props) => {
    const dispatch = useDispatch();
    const surveyState = useSelector(
        (state: RootState) => {
            return state.survey
        }
    )

    useEffect(
        () => {
            if (!surveyState.loading && surveyState.surveys.length === 0) {
                console.log('dispatch');
                dispatch(fetchSurveys());
            }
        }, [surveyState]);


    useEffect(
        () => {
            if (surveyState.loading) {
                console.log('hoi!');
                dispatch(getSurveySuccess());
            }
        }, [surveyState]
    );
    return (
        <React.Fragment>
            <div>Surveys</div>
            {surveyState.surveys.map((survey) => {
                return <div key={survey}>{survey}</div>
            })}
        </React.Fragment>
    )
}

export default Surveys;