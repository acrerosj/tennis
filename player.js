class Player {
  name;

  #sex = 'female';

  birthDate = null;

  constructor(name, sex, strDate = '1/1/2000') {
    this.name = name;
    if (sex === 'male' || sex === 'female') {
      this.#sex = sex;
    }
    const [d, m, y] = strDate.split('/');
    const date = new Date(y, m, d);
    if (Number.isNaN(Date.parse(date))) throw new Error();
    this.birthDate = date;
  }

  get sex() { return this.#sex; }

  get age() {
    const today = new Date();
    let calcAge = today.getFullYear() - this.birthDate.getFullYear();
    const m = today.getMonth() - this.birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < this.birthDate.getDate())) {
      calcAge -= 1;
    }
    return calcAge;
  }

  get category() {
    const calcAge = this.age;
    if (calcAge < 12) return 'Benjamin';
    if (calcAge < 16) return 'Cadet';
    if (calcAge < 20) return 'Junior';
    return 'Senior';
  }
}

module.exports = Player;
