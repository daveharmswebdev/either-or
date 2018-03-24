// routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

export function routing($stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true)

  const helloWorldState = {
    name: 'hello-world',
    url: '/hello-world',
    component: 'helloWorld'
  }

  const helloDaveState = {
    name: 'hello-dave',
    url: '/hello-dave',
    component: 'helloDave'
  }

  const selectionDisplayState = {
    name: 'selection-display',
    url: '/selection',
    component: 'selectionDisplay'
  }

  const roundRobinState = {
    name: 'round-robin',
    url: '/round-robin',
    component: 'rrDisplay'
  }

  $stateProvider.state(helloWorldState);
  $stateProvider.state(helloDaveState);
  $stateProvider.state(selectionDisplayState);
  $stateProvider.state(roundRobinState);
}
