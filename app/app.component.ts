import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { total } from "./data";
import { game } from "./data";
import { valuelist } from "./data";
import { multivaluelist } from "./data";
import { multitotalvaluelist } from "./data";


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  total: any[];
  game: any[];

  view: any[] = [1400, 500];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "";
  showYAxisLabel = true;
  yAxisLabel = "Score";

  colorScheme9 = {
    domain: [
      "#bfbc05",
      "#c4c026",
      "#c9c439",
      "#cec849",
      "#d3cc58",
      "#d8d066",
      "#dcd473",
      "#e1d880",
      "#e5dc8d"
    ]
  };
  colorScheme5 = {
    domain: [
      "#bfbc05",
      "#5ec468",
      "#00bdab",
      "#45acc5",
      "#869ab3"
    ]
  };

  yAxisTicks = ['--','-','+','++'];

  constructor() {
    this.game = game;
    this.total = total;
    this.multivaluelist = multivaluelist;
    Object.assign(this, { multitotalvaluelist });
  }

  yAxisTickFormatting(val) {
    switch(val){
      case 0: return '--'; break;
      case 1: return '-'; break;
      case 2: return '+'; break;
      case 3: return '++'; break; 
    }
  }

  onSelect(event) {
    console.log(event);
  }
}
