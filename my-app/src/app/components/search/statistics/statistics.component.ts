import { Component } from '@angular/core';
import { Statistics } from 'src/app/models/statistics.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent {
  statisticsList: Statistics | {} ;

  constructor() {
    this.statisticsList = {};
  }
}

export { StatisticsComponent as default };
