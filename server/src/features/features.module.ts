import { QuestionsModule } from './questions/questions.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [QuestionsModule],
})
export class FeaturesModule { }
