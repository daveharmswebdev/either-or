export function choiceCtrl() {
  this.$onInit = function() {
    console.log(this.choice)
  }

  this.makeChoice = function(decision) {
    console.log(decision)
    this.onMakeChoice({
      $event: decision
    })
  }
}
