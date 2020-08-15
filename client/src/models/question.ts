export enum QuestionType {
    "YES_NO" = 0,
    "MULTIPLE_CHOICE" = 1,
    "OPEN_INPUT" = 2,
}

export interface IQuestion {
    text: string;
}

export interface IAnswerOption {
    id: number;
    text: string;
    value: number | string;
}

export interface IQuestionData {
    id: number;
    questionType: QuestionType;
    question: IQuestion;
    answerOptions?: IAnswerOption[];
}