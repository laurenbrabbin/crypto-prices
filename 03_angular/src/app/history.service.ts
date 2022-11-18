import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  static API_URL = '//localhost:3000/';

  constructor(private http: HttpClient) { }

  getHistory(from: string, to: string): Observable<any> {
    return this.http.get(`${HistoryService.API_URL}history?from=${from}&to=${to}`)
      .pipe(map((res: any) => res['history']));
  }
}
