class API {
  constructor() {
    this.API_URL = 'https://barkwire-api.herokuapp.com/dogs';
  }
  getDogs() {
    return fetch(this.API_URL)
      .then(res => res.json());
  }
  getDog(id) {
    return fetch(`${this.API_URL}/${id}`)
      .then(res => res.json());
  }
}
