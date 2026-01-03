

const fs = require('node:fs') // Apartir de NodeJS 16 se recomienda tener esta validacion siempre

const stats = fs.statSync('./archive.txt') // Leer arichivo de forma Sincrona.


console.log(
    stats.isFile(), // Si es un fichero
    stats.isDirectory(), // Si es un directorio
    stats.isSymbolicLink(), // Es un elance simbolico?
    stats.size() // Leer fichero

)