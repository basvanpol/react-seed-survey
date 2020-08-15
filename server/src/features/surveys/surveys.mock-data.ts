import { QuestionType } from "src/models/question";
import { IQuestionData } from '../../models/question';

export const mockData: IQuestionData[] = [
    {
        id: 1,
        questionType: QuestionType.MULTIPLE_CHOICE,
        question: {
            text: "How do you feel about the current rise in Covid-19 cases in New Zealand?",
        },
        answerOptions: [],
    },
    {
        id: 2,
        questionType: QuestionType.YES_NO,
        question: {
            text: "Do you agree with the government's approach to eradicating the virus?",
        },
        answerOptions: [],
    },
    {
        id: 3,
        questionType: QuestionType.MULTIPLE_CHOICE,
        question: {
            text: "What did you miss the most when being in lckdown during alert level 4",
        },
        answerOptions: [],
    },
    {
        id: 4,
        questionType: QuestionType.MULTIPLE_CHOICE,
        question: {
            text: "What did you enjoy the most when being in lockdown during alert level 4",
        },
        answerOptions: [],
    },
];
