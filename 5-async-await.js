// En este archivo se lee con el async await

/*
    Las funciones Async son funciones que se ejecutan en segundos hilos para poder hacer un codigo mas limpio
    las promesas Await , son como checkpoints que cuando se esta ejecutando la fucion async , esta espera en cierto parametro para obtener una respuesta no nula.
    Ya que si este no espera en donde se declara el await, puede que reciba un parametro nulo y este falle.
 */

const fs = require('node:fs')

  