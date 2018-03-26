export class decisionViewCtrl {

  constructor() {
    this.choice = {}
  }

  $onInit() {
    console.log(this.decision);
  }

  makeChoice(choice) {
    this.choice = choice;
    this.decision.chosen = choice;
    console.log(`A choice has been made: ${this.decision.chosen.name}`);
  }
}
