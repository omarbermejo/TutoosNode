/* 
    En este archivo se verá las promesas ejecutadas al mismo tiempo y sin retraso alguno, aunque se esten ejecutando a tiempo estas funciones.
    Siempre deben ser no NULL , ya que si estas son nulas romperan todo el archivo y haran inconsistencia en el codigo.
*/

// Al exportar el READFILE esencial para las promesas
const {readFile} = require('node:fs/promises')


// Esto lo que hace es ejecutar dos funciones / promesas a la vez para obtener los resultados mas rapidos
Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2+.txt', 'utf-8')
]).then(([text, text2])=> {
    // Se guardan las lecturas en variables , dependiendo la pocision en el colocamiento de las funciones si toma como predeterminada una de la otra y de manera de cascada esta se guarda.
    console.log('Lectura del primer archivo: ', text)
    console.log('Lectura del segundo archivo: ', text2)
})

