import { Injectable } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Injectable({
  providedIn: 'root',
})
export class ChartServiceService {
  constructor() {}

  getDefaultBarChart(canvasId: string, data: any) {
    return new Chart(
      document.getElementById(canvasId) as HTMLCanvasElement,
      {
        type: 'bar',
        data: data,
        options: {
          responsive: true,
          interaction: {
            intersect: false,
          },
        },
      }
    );
  }

  getDefaultPieChart(canvasId: string, data: any) {
    return new Chart(
      document.getElementById(canvasId) as HTMLCanvasElement,
      {
        type: 'pie',
        data: data,
        options: {
          responsive: true,
          interaction: {
            intersect: false,
          },
        },
      }
    );
  }
}
