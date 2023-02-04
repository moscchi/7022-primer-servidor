/**
 *  Levantar servidor con Express
 */
// Requiero el modulo express
const express = require('express');

// Creo una constante app llamando al modulo express
const app = express();
const PORT = 8080;

app.get('/', (request, response) => {
    response.send('Bienvenido a nuestro primer servidor de express');
})

app.get('/numen', (req, res) => {
    /**
     * aca va el codigo que va a la base de datos.
     */
    const producto = {name: "Tijera", price: 100, img: "url:imagen"};
    res.json(producto)
})

app.listen(PORT, () => {
    console.log(`Servidor levantado en puerto ${PORT}`);
})