import { Controller, Get, Res, HttpStatus, Header } from '@nestjs/common';
import { mockData } from './surveys.mock-data';

@Controller('surveys')
export class SurveysController {
    @Get()
    getSurveys() {
        const surveys = [...mockData];
        return surveys;
    }
}
