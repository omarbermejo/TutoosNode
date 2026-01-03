/*
    La sincronia es segemtada y se lee archivo por archivo.
    La async lee por varios hilos distintas funciones a la vez  

*/
const fs = require('node:fs')

// Aqui lee el archivo desde el txt
const text = fs.readFileSync('./archivo.txt', 'utf-8')

console.log(text)
