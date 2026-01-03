// Expoortaciones para utilizar promesas y funciones ansy

const fsAsyn = require('node:fs')
const fsPromise = require('node:fs/promises')

console.log('Leyendo el primero archivo con promesas')
// Espera el parametro donde se leerá el archivo
fsPromise.readFile('./archivo.txt' , 'utf-8')
    .then(text => {
        console.log('Texto leido con fucion de promesa, lo que hace es leer el archivo en "segundo plano", esto para poder hacer mas funciones mientras este se termina de llamar al callback ')
        console.log('Archivo con promesas: ' + text)
    })
 console.log('Este es un console log para ver el comportamiento de la funciones async, donde se pueda hacer diferentes tareas simultaneamente')
 console.log('Aqui teoricamente se ejecutaria por redaccion de codigo, el segundo tipo y mas viejo de hacer funciones async')
// Le pasamos la variable donde se guardará lo traido en el archivo, tambien se manejara errores em casop de no tener alguno , se ejecutará normal
fsAsyn.readFile('./archivo.txt' , 'utf-8', (err ,  text) => {
    console.log('Texto leido con funcion "vieja" la cual ya viene por defecto en nodejs , cuando termine de leer el archivo en el hilo secundario, se le parsará en la variable definida todo lo recolectado en segundo plano.')
    console.log('Arichivo leido con callbacks basic' + text)
})