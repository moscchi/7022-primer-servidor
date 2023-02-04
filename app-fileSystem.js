const express = require('express');
const fs = require('fs/promises');

const app = express();
const PORT = 8080;

app.get('/', async (req, res) => {
    const fileText = await fs.readFile('./archivo.txt', "utf-8");
    const arrayOfFileText = JSON.parse(fileText);
    const onlyNamesArray = arrayOfFileText.map(alumn => {
        return {name: alumn.name, lastName: alumn.lastName}
    })
    res.json(onlyNamesArray);
})



app.listen(PORT, async () => {
    //await fs.writeFile('./archivo.txt', "Acabo de levantar un servidor");
    
    console.log(`App escuchando en ${PORT}`);
});