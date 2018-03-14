import { Component, ViewChild, ElementRef } from '@angular/core';

import * as Plotly from 'plotly.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('chart') el: ElementRef;
  @ViewChild('barchart') el2: ElementRef;
  @ViewChild('table') el3: ElementRef;

  ngOnInit() {
    this.basicChart();
    this.barChart();
    this.table();
  }

  basicChart() {
    const element = this.el.nativeElement

    const data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16]
    }]

    const style = {
      margin: { t: 0 }
    }
    Plotly.plot(element, data, style)

    console.log(Plotly.d3);
  }

  barChart() {
    const element = this.el2.nativeElement;

    const data: any = [
      {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        type: 'bar'
      }
    ];

    Plotly.newPlot(element, data);
  }

  table() {
    const element = this.el3.nativeElement;

    var values = [
      ['Salaries', 'Office', 'Merchandise', 'Legal', 'TOTAL'],
      [1200000, 20000, 80000, 2000, 12120000],
      [1300000, 20000, 70000, 2000, 130902000],
      [1300000, 20000, 120000, 2000, 131222000],
      [1400000, 20000, 90000, 2000, 14102000]]

    const data:any = [{
      type: 'table',
      header: {
        values: [["EXPENSES"], ["Q1"],
        ["Q2"], ["Q3"], ["Q4"]],
        align: "center",
        line: { width: 1, color: 'black' },
        fill: { color: "grey" },
        font: { family: "Arial", size: 12, color: "white" }
      },
      cells: {
        values: values,
        align: "center",
        line: { color: "black", width: 1 },
        font: { family: "Arial", size: 11, color: ["black"] }
      }
    }]

    Plotly.plot(element, data);
  }
}
