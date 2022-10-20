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
