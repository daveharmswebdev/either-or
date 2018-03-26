import { choiceCtrl as controller } from './choiceView.controller.js';

export const ChoiceViewComponent = {
  bindings: {
    choice: '<',
    onMakeChoice: '&'
  },
  template: require('./choiceView.component.html'),
  controller
};
