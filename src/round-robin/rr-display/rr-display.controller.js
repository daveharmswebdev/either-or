export class RRCtrl {

  constructor(RoundRobinService, Choice, Decision, Survey) {
    // dependency injection
    this.rrService = RoundRobinService;
    this.choice = Choice.choice();
    this.decision = Decision.decision();
    this.survey = Survey.survey();

    // declaring properties
    this.choices = [];
    this.currentDecision = {};
    this.currentSurvey = {};
  }

  createChoices() {
    this.rrService.getChoices()
    .then(({data}) => {
      data.forEach(choice => {
        console.log(choice.name);
      });
    })
  }

  createCurrentDecision(choiceA, choiceB) {
    this.currentDecision = new this.decision([choiceA, choiceB]);
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
    // this.createCurrentDecision(this.choices[0], this.choices[1]);
    // this.currentSurvey = new this.survey([this.currentDecision]);
  }

}
