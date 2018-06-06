import { Component, OnInit } from '@angular/core';

import * as c3 from "c3";
import { HttpService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public httpService: HttpService) { }
  title = 'app';
  showArray = new Array();

  ngOnInit() {

    this.httpService.getJson().subscribe(response => {
      let len: number = response.json().length;
      for (let i = 0; i < len; i++) {
        for (let key in response.json()[i]) {
          let arr = new Array();
          arr.push(key);
          arr = arr.concat(response.json()[i][key]);
          this.showArray.push(arr);
        }
      }
      console.log(this.showArray);
      this.showChart();
    });
  }

  showChart() {
    let LineChart = c3.generate({
      bindto: "#line_chart",
      data: {
        columns: this.showArray,
        type: "line",
      }
    });

    let barChart = c3.generate({
      bindto: "#bar_chart",
      data: {
        columns:this.showArray,
        type: "bar",
      }
    });

    let pieChart = c3.generate({
      bindto: "#pie_chart",
      data: {
        columns: this.showArray,
        type: "pie",
      }
    });
  }
}
