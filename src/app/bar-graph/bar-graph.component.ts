import { Component, OnInit,ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill
} from "ng-apexcharts";
import { ThemeService } from '../services/theme.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {

  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  private isDark:boolean;
  private theme:string;

  constructor(private themeService : ThemeService) {
    this.isDark=this.themeService.isDarkMode();
    this.isDark? this.theme="white":this.theme="black"
    this.chartOptions = {
      series: [
        {
          name: "valores",
          data: [2.3, 10.1, 4.0]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val) {
          return val + " Km";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: [this.theme]
        }
      },

      xaxis: {
        categories: [
          "A","B","C"
        ],
        position: "bot",
        labels: {
          offsetY: 0,
          style:{
            colors: this.theme
          }
        },
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: this.theme,
              colorTo: this.theme,
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function(val) {
            return val + "%";
          }
        },
        forceNiceScale:true,
      },
      title: {
        text: "Distância Cidades",
        offsetY: 0,
        align: "center",
        style: {
          color: this.theme
        }
      }
    };
  }

  ngOnInit(): void {
  }

}
