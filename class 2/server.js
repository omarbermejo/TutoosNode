const express = require('express');
const console = require('node:console');
const app = express()

const PORT = 4000
// Middleware que registra la hora de cada solicitud
app.use((req, res, next) => {
    console.log('Paso por el middleware global')
    console.log('Hora de la solicitud:', new Date());
    next(); // Llama al siguiente middleware o ruta
});
app.listen(PORT , () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
app.get('/' ,(req, res) => {
    res.status(200).send('Bienvenido a mi pagina de inicio, desde el servidor, jajaj')
})
