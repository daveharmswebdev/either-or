import angular from 'angular';

import { RRDisplay } from './rr-display/rr-display.component';
import { ChoiceViewComponent } from '../common/PresentationalComponents/choiceView/choiceView.component';
import { Choice } from '../common/Factories/choice.factory';
import { Decision } from '../common/Factories/decision.factory';
import { Survey } from '../common/Factories/survey.factory';

export const RoundRobinModule = angular
  .module('RoundRobinModule', [])
  .component('rrDisplay', RRDisplay)
  .component('choiceView', ChoiceViewComponent)
  .service('Choice', Choice)
  .service('Decision', Decision)
  .service('Survey', Survey)
  .name;
