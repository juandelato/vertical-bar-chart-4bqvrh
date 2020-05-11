import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import * as shape from 'd3-shape';
import { total } from "./data";
import { game } from "./data";
import { gameCustomColors } from "./data";
import { valuelist } from "./data";
import { multivaluelist } from "./data";
import { multitotalvaluelist } from "./data";
import { multitotalvaluelist2 } from "./data";
import { playerevalhistory } from "./data";
import { playerpolarchart } from "./data";
import { playerskills } from "./data";
import { playerskillsvaluelist } from "./data";
import { comparepolarchart } from "./data";
import { comparelinechart } from "./data";
import { comparevaluelist } from "./data";




@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  total: any[];
  game: any[];

  view: any[] = [900, 500];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "";
  showYAxisLabel = true;
  yAxisLabel = "Score";
  customColors = [
    {name: 'Player 1', value: '#db613a'},
    {name: 2, value: '#ebbb14'},
    {name: 3, value: '#f0e82a'},
    {name: 4, value: '#cfe08a'},
    {name: 5, value: '#3cb371'}
  ];
  barChartCustomColors = [];

  

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

  colorScheme2 = {
    domain: [
      "#bfbc05",
      "#45acc5"
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
  playerCustomColor: any;

  constructor() {
    this.game = game;
    this.gameCustomColors = gameCustomColors;
    this.total = total;
    this.multivaluelist = multivaluelist;
    this.multitotalvaluelist2 = multitotalvaluelist2;
    this.playerevalhistory = playerevalhistory;
    this.playerpolarchart = playerpolarchart;
    this.playerskills = playerskills;
    this.playerskillsvaluelist = playerskillsvaluelist;
    this.comparepolarchart = comparepolarchart;
    this.comparelinechart = comparelinechart;
    this.comparevaluelist = comparevaluelist;
    Object.assign(this, { multitotalvaluelist });

    let that = this;

    this.gameCustomColors.forEach(r => {
      
      switch(r.value){
        case 1: that.barChartCustomColors.push({'name': r.name, 'value':'#db613a'}) ; break;
        case 2: that.barChartCustomColors.push({'name': r.name, 'value': '#ebbb14'}); break;
        case 3: that.barChartCustomColors.push({'name': r.name, 'value': '#f0e82a'}); break;
        case 4: that.barChartCustomColors.push({'name': r.name, 'value': '#cfe08a'}); break; 
        case 5: that.barChartCustomColors.push({'name': r.name, 'value': '#3cb371'}); break; 
      }
    })
    
    

  
    
  }

  yAxisTickFormatting(val) {
    switch(val){
      case 0: return '--'; break;
      case 1: return '-'; break;
      case 2: return '+'; break;
      case 3: return '++'; break; 
    }
  }

  barCustomColors(val) {
    console.log(this);
    if(this.playerCustomColor[val]){
      let foundPlayer = this.gameCustomColors.find(r => function(){
        return r.name == val;
      })
      this.playerCustomColor[val] = foundPlayer.value;

    
      switch(foundPlayer.value){
        case 1: return '#db613a'; break;
        case 2: return '#ebbb14'; break;
        case 3: return '#f0e82a'; break;
        case 4: return '#cfe08a'; break; 
        case 5: return '#3cb371'; break; 
      }
    }
  }

  onSelect(event) {
    console.log(event);
  }
}
