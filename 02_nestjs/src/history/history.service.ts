import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { parse } from 'path';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class HistoryService {
  static API_ROOT = "https://min-api.cryptocompare.com/data/v2/histohour";

  constructor(private configService: ConfigService, private http: HttpService) { }

  async priceHistory(from: string, to: string): Promise<any> { //change any to specifc type
    let json = await this.request<{ [key: string]: any }>(
      HistoryService.API_ROOT, {
        params: {
          apiKey: this.configService.get<string>('CRYPTOCOMPARE_API_KEY'),
          fsym: from,
          tsym: to,
          limit: '12', //number of data points to return
          aggregate: '1', // time period to look over
        }
      });
  
      const data = json.Data.Data
      const history = data.map(obj => obj.high)
    return history;
  }

  private async request<T>(url: string, params: { [key: string]: any }): Promise<T> {
    let request = this.http.get(url, params).pipe(map(response => response.data));
    return lastValueFrom(request);
  }
}
