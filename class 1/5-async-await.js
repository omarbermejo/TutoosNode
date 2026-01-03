// En este archivo se lee con el async await

/*
    Las funciones Async son funciones que se ejecutan en segundos hilos para poder hacer un codigo mas limpio
    las promesas Await , son como checkpoints que cuando se esta ejecutando la fucion async , esta espera en cierto parametro para obtener una respuesta no nula.
    Ya que si este no espera en donde se declara el await, puede que reciba un parametro nulo y este falle.
 */


// Al exportar el READFILE esencial para las promesas
const {readFile} = require('node:fs/promises')



async function readAsync() {
    console.log('Se leerá el archivo pero con secuencia , aunque sea Async. Esperará a que se resuelva alguna tarea para continuar.')
    //  El await lo que hace es esperar a que se ejecute la tarea para poder continuar con el proceso. 
    const textIOne = await readFile('./archivo.txt', 'utf-8')
    console.log('Se muestra el primer archivo leido con promesas desde Node, con la ejecucion asyncrona: ' + textIOne)
    // Aunque este se ejecuta con un hilo diferente sigue esperando una respuesta la cual siempre debe !null (no debe estar vacia), en caso de que esta sea null ya no se ejecuta mas la funcion.
    console.log('Hacer mas cosas mientras termina de leer el archivo. ')
    console.log('Se puede ejecutar mas funciones mientras este se ejecuta. ')
    // Ya que se resuelva la primera promesa promesa se ejecutará la segunda.
    console.log('Esta es la segunda secuencia a ejecutar en el archivo de esta funcion')
    // Se ejecutara esta promesa hasta que las demas o (la promesa de arriba) se resuelva , miestras tanto no se puede resolver , nunca llegara a las demas promesas.
    const textITwo= await readFile('./archivo2.txt', 'utf-8')
    console.log('Se muestra el primer archivo 2 leido con promesas desde Node, con la ejecucion asyncrona: ' + textITwo)
}  

readAsync()


