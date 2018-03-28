export class Choice {

  choice() {
    var Choice = function(data) {
      this.name = data.name;
      this.imageUrl = data.imageUrl;
    };

    Choice.prototype.getStatus = () => `Name: ${this.name}, Image Url: ${this.imageUrl}.`

    return Choice
  }

}
