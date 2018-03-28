import { createDecisions } from '../helpers/index';

export class RRCtrl {

  constructor(RoundRobinService, Choice, Decision, Survey) {
    // dependency injection
    this.rrService = RoundRobinService;
    this.choice = Choice.choice();
    this.decision = Decision.decision();
    this.survey = Survey.survey();

    // declaring properties
    this.decisions = {};
    this.currentSurvey = {};
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
    this.rrService.getChoices()
    .then(({data}) => {
      const choices = data.map(choice => new this.choice(choice));
      this.decisions = createDecisions(choices, this.decision);
      console.log(choices);
      console.log(this.decisions);
    });
  }

}
