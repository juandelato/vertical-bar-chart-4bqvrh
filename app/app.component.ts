import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import * as shape from 'd3-shape';
import { total } from "./data";
import { game } from "./data";
import { valuelist } from "./data";
import { multivaluelist } from "./data";
import { multitotalvaluelist } from "./data";
import { playerevalhistory } from "./data";
import { playerpolarchart } from "./data";
import { playerskills } from "./data";
import { playerskillsvaluelist } from "./data";



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

  curves = {
    Basis: shape.curveBasis,
    'Basis Closed': shape.curveBasisClosed,
    Bundle: shape.curveBundle.beta(1),
    Cardinal: shape.curveCardinal,
    'Cardinal Closed': shape.curveCardinalClosed,
    'Catmull Rom': shape.curveCatmullRom,
    'Catmull Rom Closed': shape.curveCatmullRomClosed,
    Linear: shape.curveLinear,
    'Linear Closed': shape.curveLinearClosed,
    'Monotone X': shape.curveMonotoneX,
    'Monotone Y': shape.curveMonotoneY,
    Natural: shape.curveNatural,
    Step: shape.curveStep,
    'Step After': shape.curveStepAfter,
    'Step Before': shape.curveStepBefore,
    default: shape.curveLinear
  };

  // line interpolation
  curveType: string = 'Linear';
  curve: any = this.curves[this.curveType];
  interpolationTypes = [
    'Basis',
    'Bundle',
    'Cardinal',
    'Catmull Rom',
    'Linear',
    'Monotone X',
    'Monotone Y',
    'Natural',
    'Step',
    'Step After',
    'Step Before'
  ];

  closedCurveType: string = 'Linear Closed';
  closedCurve: any = this.curves[this.closedCurveType];
  closedInterpolationTypes = ['Basis Closed', 'Cardinal Closed', 'Catmull Rom Closed', 'Linear Closed'];

  constructor() {
    this.game = game;
    this.total = total;
    this.multivaluelist = multivaluelist;
    this.playerevalhistory = playerevalhistory;
    this.playerpolarchart = playerpolarchart;
    this.playerskills = playerskills;
    this.playerskillsvaluelist = playerskillsvaluelist;
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
