import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './booking/booking.module';
import { MessengerModule } from './messenger/messenger.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { GoogleSheetsModule } from './google-sheets/google-sheets.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [BookingModule, MessengerModule, AdminModule, AuthModule, GoogleSheetsModule, HealthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
