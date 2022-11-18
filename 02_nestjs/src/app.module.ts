import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PriceController } from './price/price.controller';
import { PriceService } from './price/price.service';
import { HistoryController } from './history/history.controller';
import { HistoryService } from './history/history.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot()
  ],
  controllers: [PriceController, HistoryController],
  providers: [PriceService, HistoryService],
})
export class AppModule {}
