import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';
import { SurveysAPI } from './../../../services/http/surveys.api';
import { IQuestionData } from 'models/question';

export const fetchSurveys = createAsyncThunk(
    'surveys/fetchSurveys',
    async () => {
        const response: IQuestionData[] = await SurveysAPI.fetchSurveys();
        return response;
    }
)
export const getSurveys = createAction('getSurvey');
export const getSurveySuccess = createAction('getSurveySuccess');
interface ISurveyState {
    loading: boolean;
    questions: IQuestionData[];
}
const initialState: ISurveyState = {
    loading: false,
    questions: []
}

export const surveyReducers = createReducer(initialState, builder => {
    builder
        .addCase(getSurveys, state => {
            state.loading = true
        })
        .addCase(fetchSurveys.fulfilled, (state, action) => {
            state.loading = false,
            state.questions = action.payload
        })
        .addDefaultCase((state, action) => {
            state
        })
})