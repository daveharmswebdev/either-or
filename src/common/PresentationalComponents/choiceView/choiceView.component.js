import { choiceCtrl as controller } from './choiceView.controller.js';

export const ChoiceViewComponent = {
  bindings: {
    choice: '<',
    onDecide: '&'
  },
  template: require('./choiceView.component.html'),
  controller
};
