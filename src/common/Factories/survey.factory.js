export class Survey {

  survey() {

    const Survey = function(choices) {
      this.choices = choices;
      this.winners = [];
      this.losers = [];
    };

    Survey.prototype.recordWinner = function(winner) {
      const rtn = [...this.winners, winner];
      this.winners = rtn;
    }


    Survey.prototype.recordLoser = function(loser) {
      const rtn = [...this.losers, loser]
      this.losers = rtn;
    }

    return Survey
  }

}
