const Player = require('./player');

class Match {
  #date;

  players = [];

  #winner = null;

  constructor(strDate, player1, player2) {
    this.date = strDate;
    if (player1) this.insertPlayer(player1);
    if (player2) this.insertPlayer(player2);
  }

  get date() {
    const year = this.#date.getFullYear();
    const month = this.#date.getMonth();
    const day = this.#date.getDate();
    return [day, month, year].join('/');
  }

  set date(strDate) {
    const [d, m, y] = strDate.split('/');
    const date = new Date(y, m, d);
    if (Number.isNaN(Date.parse(date))) throw new Error();
    this.#date = date;
  }

  insertPlayer(player) {
    if (player instanceof Player && this.players.length < 2) {
      this.players.push(player);
    }
  }

  getWinner() { return this.#winner; }

  setWinner(player) {
    if (this.players.includes(player)) {
      this.#winner = player;
    }
  }
}

module.exports = Match;
