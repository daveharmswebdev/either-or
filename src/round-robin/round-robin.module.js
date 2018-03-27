import angular from 'angular';

import { RRDisplay } from './rr-display/rr-display.component';
import { DecisionComponent } from './rr-display/decisionView/decisionView.component';
import { ChoiceViewComponent } from '../common/PresentationalComponents/choiceView/choiceView.component';
import { RoundRobinService } from './round-robin.service';
import { Choice } from '../common/Factories/choice.factory';
import { Decision } from '../common/Factories/decision.factory';
import { Survey } from '../common/Factories/survey.factory';

export const RoundRobinModule = angular
  .module('RoundRobinModule', [])
  .component('rrDisplay', RRDisplay)
  .component('decisionView', DecisionComponent)
  .component('choiceView', ChoiceViewComponent)
  .service('RoundRobinService', RoundRobinService)
  .service('Choice', Choice)
  .service('Decision', Decision)
  .service('Survey', Survey)
  .name;
