import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexYAxis,
  ApexFill,
  ApexMarkers,
  ApexStroke
} from "ng-apexcharts";
import { ThemeService } from '../services/theme.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  fill: ApexFill;
  stroke: ApexStroke;
  markers: ApexMarkers;
  colors: string[];
};
@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit {
  @ViewChild("chart") 
  chart!: ChartComponent;
  public chartOptions1: Partial<ChartOptions>;
  private isDark:boolean;
  private theme:string;
  constructor(private themeService : ThemeService) {
    this.isDark=this.themeService.isDarkMode();
    this.isDark? this.theme="white":this.theme="black"
    this.chartOptions1 = {
      series: [
        {
          name: "series1",
          data: [[1,2],[2,4],[7,1],[10,12]]
        }
      ],
      chart: {
        id: "chart2",
        type: "line",
        height: 230,
        toolbar: {
          autoSelected: "pan",
          show: false
        }
      },
      colors: [this.theme],
      stroke: {
        width: 3
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 1
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: "numeric",
        labels:{
          style:{
            colors:this.theme
          }
        }
      },
      yaxis:{
        labels:{
          style:{
            colors: this.theme
          }
        }
      }
    };
  }
  
  public generateDayWiseTimeSeries(baseval: number, count: any, yrange: { min: any; max: any; }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  ngOnInit(): void {
    
  }


}
