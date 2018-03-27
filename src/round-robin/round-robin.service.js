export class RoundRobinService {

  constructor($http) {
    this.http = $http;
    this._baseUrl = 'http://localhost:3000'
  }

  getChoices() {
    return this.http.get(this._baseUrl + '/choices');
  }
}
