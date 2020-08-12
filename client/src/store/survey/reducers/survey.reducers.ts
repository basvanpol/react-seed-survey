import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';
import { SurveysAPI } from './../../../services/http/surveys.api';
export const fetchSurveys = createAsyncThunk(
    'surveys/fetchSurveys',
    async () => {
        const response: number[] = await SurveysAPI.fetchSurveys();
        return response;
    }
)
export const getSurveys = createAction('getSurvey');
export const getSurveySuccess = createAction('getSurveySuccess');
interface ISurveyState {
    loading: boolean;
    surveys: number[]
}
const initialState: ISurveyState = {
    loading: false,
    surveys: []
}

export const surveyReducers = createReducer(initialState, builder => {
    builder
        .addCase(getSurveys, state => {
            state.loading = true
        })
        .addCase('getSurveySuccess', state => {
            state.loading = false,
            state.surveys = [1, 2, 3, 4]
        })
        .addCase(fetchSurveys.fulfilled, (state, action) => {
            state.loading = false,
            state.surveys = action.payload
        })
        .addDefaultCase((state, action) => {
            state
        })
})