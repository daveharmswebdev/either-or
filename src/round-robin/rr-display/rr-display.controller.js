export class RRCtrl {

  constructor(Choice, Decision, Survey) {
    // dependency injection
    this.choice = Choice.choice()
    this.decision = Decision.decision()
    this.survey = Survey.survey();

    // declaring properties
    this.choices = [];
    this.currentDecision = {};
    this.currentSurvey = {};
  }

  createChoices() {
    const firstChoice = new this.choice({
      name: 'Donald Duck',
      url: 'data:image/png;base64,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'
    });
    const secondChoice = new this.choice({
      name: 'Mickey Mouse',
      url: 'data:image/png;base64,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'
    });
    this.choices = [firstChoice, secondChoice];
  }

  createCurrentDecision(choiceA, choiceB) {
    this.currentDecision = new this.decision(choiceA, choiceB);
  }

  decide(decision) {
    console.log(decision);
    this.currentDecision.decide(decision);
    this.currentSurvey.recordWinner(decision);
    const loser = this.choices.filter(choice => choice.name != decision.name)
    this.currentSurvey.recordLoser(loser);
  }

  $onInit() {
    this.createChoices();
    this.createCurrentDecision(this.choices[0], this.choices[1]);
    this.currentSurvey = new this.survey([this.currentDecision]);
  }

}
