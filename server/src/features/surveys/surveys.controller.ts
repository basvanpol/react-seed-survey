import { Controller, Get, Res, HttpStatus, Header } from '@nestjs/common';

@Controller('surveys')
export class SurveysController {

    @Get()
    getSurveys() {
        const surveys = [1, 3, 5, 7, 9];
        return surveys;
    }
}
