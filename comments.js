// Create web server
// Importar el módulo http
const http = require('http');

// Crear el servidor
const server = http.createServer((req, res) => {
  // Establecer el encabezado de la respuesta
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Enviar la respuesta
  res.end('Hola, mundo!\n');
});

// Configurar el servidor para que escuche en el puerto 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});