const http = require('node:http')

const puertoDe = process.env.PORT ?? 3400

// En JS las funciones son de primera clase , osea que no necesitan ser anonimas para poder utlizarce
const ServerPetProcess = (req, res)=>{
    if (req.url === '/'){
    res.statusCode === 200
    console.log(' Respuesta recibida desde el servidor ', req.url)
    res.end('Bienvenido a mi pagina de inicio, desde el servidor, jajaj')
    }else{
        console.log('Error al ejecutar el servidor')
    }
}
// La forma mas facil de escuchar al servidor , desde node js
const server = http.createServer(ServerPetProcess)

server.listen(puertoDe , ()=>{
    console.log(`servidor abierto para uso een el puerto http://localhost:${puertoDe}`)
})