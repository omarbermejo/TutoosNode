const express = require('express');
const app = express();
const path = require('path');
const { validateMovie, validatePartialMovie } = require('./schemas/movies')


// Se exporta el objeto del JSON personas
const movies = require('./movies.json')

const PORT = process.env.PORT ?? 3800

// Middleware para parsear JSON
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'pagina' (ej: pagina/index.html)
app.use(express.static(path.join(__dirname, 'pagina')));

// deshabilitar el header X-Powered-By: Express
app.disable('x-powered-by') 


// Definición de rutas
app.get('/', (req, res) => {
    res.status(200).send('Bienvenido a mi pagina de inicio, desde el servidor con Express!');
});

// Recuperamos las movies (peliculas) desde el objeto json para mostrarla en la API
app.get('/movies' , (req ,res)=>{
    const { genre } = req.query
    if (genre) {
    const filteredMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
    res.json(movies)
})
app.get('/movies/:id', (req, res) => {
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)
  res.status(404).json({ message: 'Pelicula no encontrada' })
})

////// MANDAR DATOS AL JSON

app.post('/movies', (req, res) => {
  const result = validateMovie(req.body)

  if (!result.success) {
    // 422 Unprocessable Entity
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  // en base de datos
  const newMovie = {
    id: crypto.randomUUID(), // uuid v4
    ...result.data
  }

  // Esto no sería REST, porque estamos guardando
  // el estado de la aplicación en memoria
  movies.push(newMovie)

  res.status(201).json(newMovie)
})

app.delete('/movies/:id', (req, res) => {
  const { id } = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)

  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Pelicula no encontrada' })
  }

  movies.splice(movieIndex, 1)

  return res.json({ message: 'Pelicula eliminada' })
})

app.patch('/movies/:id', (req, res) => {
  const result = validatePartialMovie(req.body)

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  const { id } = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)

  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Pelicula no encontrada' })
  }

  const updateMovie = {
    ...movies[movieIndex],
    ...result.data
  }

  movies[movieIndex] = updateMovie

  return res.json(updateMovie)
})


// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).send('Página no encontrada');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor abierto para uso en el puerto http://localhost:${PORT}`);
});
