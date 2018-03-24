export function choiceCtrl() {
  this.$onInit = function() {
    console.log(this.choice)
  }

  this.decide = function(decision) {
    console.log(decision)
    this.onDecide({
      $event: decision
    })
  }
}
