import { Component,  Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent {
  chart!: any; //change to a chart
  @Input() from!: string;
  @Input() to!: string;
  history!: any; //change to an array

  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {
    this.loadHistoryData();
  }

  loadHistoryData() {
    this.historyService.getHistory(this.from, this.to).subscribe(history => {
      this.createChart(history);
    });
  }

  createChart(history: any){
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['', '', '','', '', '','', '', '', '', '',''], 
	       datasets: [
          {
            label: "Price",
            data: history,
            backgroundColor: 'pink'
          }, 
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
}
