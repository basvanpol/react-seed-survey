import { IQuestionData } from "models/question";

export class SurveysAPI {
    static async fetchSurveys(): Promise<IQuestionData[]> {
        return fetch('http://localhost:3000/surveys', {
            method: "get"
        }).then((response) => {
            return response.json()
        }).then((data) => {
            return data
        }).catch(error => null);
    }
}

export default SurveysAPI;