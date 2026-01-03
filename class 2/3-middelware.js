/*
    El middleware es una función que se ejecuta antes de llegar a la ruta solicitada.
    Se utiliza para realizar tareas comunes como la autenticación, el registro de solicitudes,
    el manejo de errores, entre otras.

    En Express, los middleware se definen utilizando la función app.use() o app.METHOD(),
    donde METHOD es el verbo HTTP (GET, POST, etc.) correspondiente a la ruta.

    Ejemplo de middleware que registra la hora de cada solicitud:   
    app.use((req, res, next) => {
        console.log('Hora de la solicitud:', new Date());
        next(); // Llama al siguiente middleware o ruta
    });

    Ejemplo de middleware para autenticar usuarios:
    app.use((req, res, next) => {
        if (req.headers.authorization) {
            next(); // Usuario autenticado, continúa a la siguiente función
        } else {
            res.status(401).send('No autorizado');
        }
    });

    Los middleware son fundamentales para estructurar aplicaciones Express de manera modular
    y mantener el código limpio y organizado.
*/

const express = require('express')
const app = express()

// Middleware que registra la hora de cada solicitud
app.use((req, res, next) => {
    console.log('Hora de la solicitud:', new Date());
    next(); // Llama al siguiente middleware o ruta
});


const PORT = 4600

app.listen(PORT , () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
app.get('/' ,(req, res) => {
    res.status(200).send('Bienvenido a mi pagina de inicio, desde el servidor, jajaj')
})
app.get('/about' ,(req, res) => {
    res.status(200).send('Esta es la pagina de about , desde el servidor, jajaj')
}
);