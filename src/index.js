import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { routing } from './routing';

import './assets/scss/app.scss'

import { HelloWorld } from './HelloWorld/hello-world.component';
import { HelloDave } from './HelloDave/hello-dave.component';
import { SelectionDisplay } from './selection-display/selection-display.component';
import { RoundRobinModule } from './round-robin/round-robin.module';



angular.module('app', [uiRouter, RoundRobinModule]);

angular.module('app').config(routing)

angular.module('app').component('helloWorld', HelloWorld);
angular.module('app').component('helloDave', HelloDave);
angular.module('app').component('selectionDisplay', SelectionDisplay);
