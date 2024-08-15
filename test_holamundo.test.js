const fs = require('fs');
const path = require('path');

test('El archivo holamundo.html contiene "¡Hola Mundo!"', () => {
  const filePath = path.join(__dirname, 'holamundo.html');
  const content = fs.readFileSync(filePath, 'utf-8');
  expect(content).toContain('¡Hola Mundo!');
});
