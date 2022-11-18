import { Component, Input, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';

@Component({
  selector: 'history-display',
  templateUrl: './history-display.component.html',
  styleUrls: ['./history-display.component.css']
})

export class HistoryDisplayComponent implements OnInit {
  @Input() from!: string;
  @Input() to!: string;
  history!: any; //change value

  constructor(private historyService: HistoryService) {}

  ngOnInit(): void { 
    this.loadHistoryData();
} 

  loadHistoryData() {
    this.historyService.getHistory(this.from, this.to).subscribe(history => {
      this.history = history;
    });
  }

  get loading(): boolean {
    return this.history === undefined;
  }
}
