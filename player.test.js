const Player = require('./player');

test('Crear jugador debe ser instancia de Player', () => {
  const player1 = new Player();
  expect(typeof player1).toBe('object');
  expect(player1).toBeInstanceOf(Object);
  expect(player1).toBeInstanceOf(Player);
});

test('Crear jugador con nombre, se almacena nombre en propiedad name', () => {
  const player1 = new Player('Pepe');
  expect(player1.name).toBe('Pepe');
});

test('Al crear un jugador se debe indicar si es "male" o "female".', () => {
  const player1 = new Player('Pepe', 'male');
  expect(player1.sex).toBe('male');
  const player2 = new Player('Ana', 'female');
  expect(player2.sex).toBe('female');
});


test('Si no se indica nada o no es exactamente "male" o "female", se almacena como "female".', () => {
  const player1 = new Player('Raro','kkfu');
  expect(player1.sex).toBe('female');
  const player2 = new Player('Ana');
  expect(player2.sex).toBe('female');
});

test('No se puede modificar el sexo.', () => {
  const player2 = new Player('Ana', 'female');
  player2.sex = 'male';
  expect(player2.sex).toBe('female');
});

test('Establecer fecha nacimiento jugador', () => {
  const player1 = new Player('Pepe', 'male', '23/12/2021');
  const date1 = new Date(2021, 12, 23);
  expect(player1.birthday).toEqual(date1);
});
