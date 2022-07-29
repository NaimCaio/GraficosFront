import { Component, OnInit,ViewChild } from '@angular/core';
import {  ChartComponent } from "ng-apexcharts";
import { ThemeService } from '../services/theme.service';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexPlotOptions,
  ApexGrid,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  plotOptions: ApexPlotOptions;
  grid: ApexGrid;
  title: ApexTitleSubtitle;
  labels: string[];
};

@Component({
  selector: 'app-semi-donut',
  templateUrl: './semi-donut.component.html',
  styleUrls: ['./semi-donut.component.css']
})
export class SemiDonutComponent implements OnInit {
  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  private isDark:boolean;
  private theme:string;

  constructor(private themeService:ThemeService) {
    this.isDark=this.themeService.isDarkMode();
    this.isDark? this.theme="white":this.theme="black"
    this.chartOptions = {
      series: [76],
      chart: {
        type: "radialBar",
        offsetY: -20
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2
            }
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: this.theme,
              fontSize: "13px"
            },
            value: {
              color: this.theme,
              fontSize: "30px",
              show: true
            }
          }
        }
      }
      
    };
  }
  ngOnInit(): void {
    
  }

}
