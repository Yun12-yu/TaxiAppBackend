import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { DriverModule } from './driver/driver.module';
import { TripModule } from './trip/trip.module';

@Module({
  imports: [PrismaModule, DriverModule, TripModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
