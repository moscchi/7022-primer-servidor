/*
*   Levantar servidor con NodeJS PURO con modulo http
*/

const http = require('http');
const PORT = 8080;
const server = http.createServer((request, response) => {
    if(request.url === '/') {
        response.write('Hola desde nuestro primer servidor');
        response.end();
    };
    if(request.url === '/numen'){
        response.write('Server de Numen 7022');
        response.end();
    }
    
});

server.listen(PORT);

console.log('Server escuchando en ', PORT);