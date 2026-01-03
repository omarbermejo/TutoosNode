// Se creará de los mas basico pero es para tener una ayuda y una visualizacion mas facil desde NODE JS

const http = require('node:http') // PROTOCOLO HTTP (SOLAMENTE PARA HTTP)
const {PuertoDeLibreAcceso} = require('./10-free-port')

const port = process.env.PORT ?? 3000

// Se creara el servidor desde el node js
const server = http.createServer((req, res) =>{
    console.log ('Se recibio la peticion')
    res.end('Hola puto')
})

PuertoDeLibreAcceso(port).then(port =>{
   server.listen(port,()=>{
     console.log(`Servidor escuchando desde el puerto http://localhost:${port}` )
   })
})


