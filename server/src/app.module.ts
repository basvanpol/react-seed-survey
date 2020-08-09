import { Module } from '@nestjs/common';
import { AuthModule } from './features/auth/auth.module';
import { FeaturesModule } from './features/features.module';

@Module({
  imports: [AuthModule, FeaturesModule],
})
export class AppModule { }
