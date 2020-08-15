import React, { useEffect } from 'react';
import { getSurveySuccess, fetchSurveys } from '../../store/survey/reducers/survey.reducers';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
interface IProps {
}
const Surveys: React.FC<IProps> = (props) => {
    const dispatch = useDispatch();
    const questions = useSelector(
        (state: RootState) => {
            return state.survey.questions
        }
    )
    const loading = useSelector(
        (state: RootState) => {
            return state.survey.loading
        }
    )

    useEffect(
        () => {
            if (!loading && questions && questions.length === 0) {
                dispatch(fetchSurveys());
            }
        }, [loading, questions]);


    useEffect(
        () => {
            if (loading) {
                dispatch(getSurveySuccess());
            }
        }, [loading]
    );
    return (
        <React.Fragment>
            <div>Surveys</div>
            {
                questions && questions.length > 0 &&
                questions.map(({id, question}, index) => {
                    return <div key={'aloha'+id}>{question.text}</div>
                })
            }
        </React.Fragment>
    )
}

export default Surveys;