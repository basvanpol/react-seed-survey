import { SurveysModule } from './surveys/surveys.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [SurveysModule],
})
export class FeaturesModule { }
