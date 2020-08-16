import { QuestionType } from "src/models/question";
import { IQuestionData } from '../../models/question';

export const mockData: IQuestionData[] = [
    {
        id: 5,
        questionType: QuestionType.YES_NO,
        question: {
            text: "Do you think the city council provides enough parking space for bicycles in Wellington CBD?",
        },
        answerOptions: [],
    },
    {
        id: 4,
        questionType: QuestionType.YES_NO,
        question: {
            text: "Would you use your bike daily to have a positive impact on the environment?",
        },
        answerOptions: [],
    },
    {
        id: 3,
        questionType: QuestionType.YES_NO,
        question: {
            text: "Would you prefer an e-bike over a classic bike?",
        },
        answerOptions: [],
    },
    {
        id: 2,
        questionType: QuestionType.YES_NO,
        question: {
            text: "If there were more cycle lanes, would you use them?",
        },
        answerOptions: [],
    },
    {
        id: 1,
        questionType: QuestionType.YES_NO,
        question: {
            text: "Do you own a bike?",
        },
        answerOptions: [],
    },
];
