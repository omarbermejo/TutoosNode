import * as path from 'node:path'
// El path es un enlace o un operador que devuelve
console.log(path.sep)

// Se uniran rutas con path.join
const FileNewC = path.join('content','subfolder','text.txt')
console.log(FileNewC)

// Se trae el nombre del fichero solamente de una ruta ya preestablecida
const base = path.basename('/temp/omardev/pass.txt')
console.log('El nombre del archivo base: ',base)

// Tambien se puede eliminar extenciones de archivo a buscar en el path o en la ruta que se establecio.
const FileNameBase = path.basename('/temp/omardev/pass.txt', '.txt')
console.log('El archivo base de una extension especifica es: ', FileNameBase)

// Extencion desde el path

const extensiones = path.extname('mi.js.txt')
console.log('La extencion es ',extensiones)