export class decisionViewCtrl {

  constructor() {
    this.choice = {}
  }

  $onInit() {
    console.log(this.decision);
  }

  makeChoice(choice) {
    this.choice = choice;
    this.decision.decide(choice);
    console.log(`A choice has been made: ${this.decision.chosen.name}`);

    // need to pass the choice back up to the parent
  }
}
