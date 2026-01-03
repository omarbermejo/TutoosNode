/*
    En este archivo se veran todo el manejo de rutas las cuales nos ayudan a ser un poco mas rapido y legible
    el codigo a la hora de estar programando algo.
*/


const http = require('node:http')
// Se define el puerto desde las variables de entorno , sin embargo en caso de no encontrarlo es por defecto 3400
const puertoDe = process.env.PORT ?? 3400
const ServerPetProcess = (req, res)=>{
   
}
const server = http.createServer(ServerPetProcess)
server.listen(puertoDe , ()=>{
    console.log(`servidor abierto para uso een el puerto http://localhost:${puertoDe}`)
})