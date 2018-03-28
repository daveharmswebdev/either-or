export class Decision {

  decision() {
    const Decision = function(choices) {
      this.choices = choices
      this.chosen = null;
    }

    Decision.prototype.decide = function (choice) {
      console.log('factory', choice)
      this.chosen = choice;
    }

    return Decision;
  }

}
