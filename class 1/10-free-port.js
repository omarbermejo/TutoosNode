// Se hará la peticion del servidor dependiendo del puerto libre que este para eso.


const net = require('node:net') // Es otro protocolo sin tantas cabeceras para un rendimiento mejor en la peticiones

function PuertoDeLibreAcceso (MejorPuerto){
    // Se crea una nueva promesa para la creacion de el servidor desde el modulo ".net"
    return new Promise((resolve, reject) => {
        // Secra el servidor
        const server = net.createServer()
        // Escucha el mejor puerto o el puerto libre para usar
        server.listen(MejorPuerto,() => {
            // Seteamos el puerto al servidor
            const { port } = server.address()
            // Cerramos el servidor con el puerto
            server.close(() => {
                resolve(port)
            })
        })
        // Por nativo Node ya maneja los errores, asi que tenemos propiedades desntro de las funciones para manejar esos eventos.
        server.on('error', (err)=>{
            // Si el servidor por alguna razon falla en el puerto, se vuelve a ejecutar la funcion para setear otro puerto NO usado.
            if (err.code === 'EADDRINUSE'){
                // Seteo del puerto (0) siempre busca el puerto libre
                PuertoDeLibreAcceso(0).then(port => resolve(port))
            }
        })
    })
}

module.exports = {PuertoDeLibreAcceso}