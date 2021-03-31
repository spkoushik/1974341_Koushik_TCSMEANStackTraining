import {ExamQuestions } from './examquestions.model';

export class Question {
    id: number;
    name: string;
    questionTypeId: number;
    options: ExamQuestions[];
    answered: boolean | undefined;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.name = data.name;
        this.questionTypeId = data.questionTypeId;
        this.options = [];
        data.options.forEach((o: any) => {
            this.options.push(new ExamQuestions(o));
        });
    }
}