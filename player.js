class Player {
  name;

  #sex = 'female';

  birthday = null;

  constructor(name, sex, strDate) {
    this.name = name;
    if (sex === 'male' || sex === 'female') {
      this.#sex = sex;
    }
    if (strDate) {
      const [d, m, y] = strDate.split('/');
      this.birthday = new Date(y, m, d);
    }
  }

  get sex() { return this.#sex; }
}

module.exports = Player;
