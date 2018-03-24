export class Decision {

  decision() {
    const Decision = function(choiceA, choiceB) {
      this.choiceA = choiceA;
      this.choiceB = choiceB;
      this.chosen = null;
    }

    Decision.prototype.decide = function (choice) {
      this.chosen = choice;
    }

    return Decision;
  }

}
