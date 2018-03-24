export class Choice {

  choice() {
    var Choice = function(data) {
      this.name = data.name;
      this.imageUrl = data.url;
    };

    Choice.prototype.getStatus = () => `Name: ${this.name}, Image Url: ${this.imageUrl}.`

    return Choice
  }

}
