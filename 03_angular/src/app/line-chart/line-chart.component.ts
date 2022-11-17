import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
// import Chart from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  chart!: any; //change to a chart

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['11:00', '12:00', '13:00','14:00', '15:00', '16:00','17:00', '18:00', '19:00', '20:00', '21:00','22:00', '23:00', '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00'], 
	       datasets: [
          {
            label: "Price",
            data: ['16700', '16750', '16800','16700', '16850', '16750', '16500','16400', '16300', '16500', '16600','16500', '16700', '16750', '16800','16700', '16850', '16700', '16750', '16800','16700', '16850', '16500','16600', '16500'],
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
