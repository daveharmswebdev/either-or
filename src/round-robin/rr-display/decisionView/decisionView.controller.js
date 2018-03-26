export class decisionViewCtrl {

  constructor() {
    this.choice = {}
  }

  $onInit() {
    console.log(this.decision);
  }

  makeChoice(choice) {
    this.choice = choice;
    console.log(`A choice has been made: ${this.choice.name}`);
  }
}
