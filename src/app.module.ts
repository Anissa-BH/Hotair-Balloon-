import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HaBalloonsModule } from './hot-air-balloons/ha-balloons.module';

@Module({
  imports: [HaBalloonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
