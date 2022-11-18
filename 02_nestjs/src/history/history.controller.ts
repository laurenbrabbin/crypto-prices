import { Controller, Get, Query } from '@nestjs/common';
import { HistoryService } from './history.service'; 

@Controller('history')
export class HistoryController {
  constructor(private readonly HistoryService: HistoryService) {}

  @Get()
  async get(@Query('from') from: string, @Query('to') to: string): Promise<{ history: any }> { //change any to specifc type 
    let history = await this.HistoryService.priceHistory(from, to);
    return { history };
  }
}
