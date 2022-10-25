const Match = require('./match');
const Player = require('./player');

test('Crear un partido con fecha y sin jugadores', () => {
  const match1 = new Match('12/10/2022');
  expect(match1).toBeInstanceOf(Match);
  expect(match1.date).toBe('12/10/2022');
});

test('Debe ser una fecha válida', () => {
  expect(() => new Match('kkfu')).toThrow();
});

test('Crear un partido con fecha y jugadores', () => {
  const player1 = new Player('Pepe', 'male', '12/11/2000');
  const player2 = new Player('Ana', 'female', '22/5/2002');
  const match1 = new Match('12/10/2022', player1, player2);
  expect(match1).toBeInstanceOf(Match);
  expect(match1.date).toBe('12/10/2022');
  expect(match1.players).toContain(player1);
  expect(match1.players).toContain(player2);
});

test('Crear un partido con fecha y strings en lugar de jugadores', () => {
  const match1 = new Match('12/10/2022', 'Pepe', 'Ana');
  expect(match1).toBeInstanceOf(Match);
  expect(match1.date).toBe('12/10/2022');
  expect(match1.players).not.toContain('Pepe');
  expect(match1.players).not.toContain('Ana');
});

test('Crear un partido con fecha, sin jugadores e insertar tres jugadores. Solo se deben registrar los dos primeros.', () => {
  const match1 = new Match('12/10/2022');
  expect(match1).toBeInstanceOf(Match);
  expect(match1.date).toBe('12/10/2022');
  const player1 = new Player('Pepe', 'male', '12/11/2000');
  const player2 = new Player('Ana', 'female', '22/5/2002');
  const player3 = new Player('Marta', 'female', '12/7/2001');
  match1.insertPlayer(player1);
  match1.insertPlayer(player2);
  match1.insertPlayer(player3);
  expect(match1.players).toContain(player1);
  expect(match1.players).toContain(player2);
  expect(match1.players).not.toContain(player3);
});

test('Crear un partido con jugadores, ganador por defecto debe ser null', () => {
  const player1 = new Player('Pepe', 'male', '12/11/2000');
  const player2 = new Player('Ana', 'female', '22/5/2002');
  const match1 = new Match('12/10/2022', player1, player2);
  expect(match1.getWinner()).toBeNull();
});

test('Crear un partido con jugadores, ganador que pertenece al partido', () => {
  const player1 = new Player('Pepe', 'male', '12/11/2000');
  const player2 = new Player('Ana', 'female', '22/5/2002');
  const match1 = new Match('12/10/2022', player1, player2);
  match1.setWinner(player2);
  expect(match1.getWinner()).not.toBeNull();
  expect(match1.getWinner()).not.toBe(player1);
  expect(match1.getWinner()).toBe(player2);
});

test('Crear un partido con jugadores, ganador que no pertenece al partido, debe devolver null', () => {
  const player1 = new Player('Pepe', 'male', '12/11/2000');
  const player2 = new Player('Ana', 'female', '22/5/2002');
  const player3 = new Player('Marta', 'female', '12/7/2001');
  const match1 = new Match('12/10/2022', player1, player2);
  match1.setWinner(player3);
  expect(match1.getWinner()).toBeNull();
  expect(match1.getWinner()).not.toBe(player1);
  expect(match1.getWinner()).not.toBe(player2);
  expect(match1.getWinner()).not.toBe(player3);
});
