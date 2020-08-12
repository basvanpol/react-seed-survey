export class SurveysAPI {
    static fetchSurveys(): Promise<number[]> {
        return new Promise((resolve, reject) => {
            resolve([1,2,3,4,5,6, 7, 8])
        })
    }
}

export default SurveysAPI;