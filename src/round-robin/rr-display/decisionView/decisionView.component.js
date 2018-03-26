import { decisionViewCtrl as controller } from './decisionView.controller';

export const DecisionComponent = {
  bindings: {
    decision: '<'
  },
  template: require('./decisionView.html'),
  controller
}
