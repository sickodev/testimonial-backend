import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { OrgModule } from './org/org.module';

@Module({
  imports: [HealthModule, OrgModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
