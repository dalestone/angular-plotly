import { Component, ViewChild, ElementRef } from '@angular/core';

import * as Plotly from 'plotly.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('chart') el: ElementRef;

  ngOnInit() {
    this.basicChart();
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
    Plotly.plot( element, data, style )
  }
}
