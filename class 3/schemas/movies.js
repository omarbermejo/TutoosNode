const z = require('zod')

// Este es una validacion para poder hacer un post en la declaracion del json
// A su vez poder tener la logica separada a la rutas predeterminadas.
const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'El titulo de la pelicula debe ser texto',
    required_error: 'La pelicula debe ser valida'
  }),
  year: z.number().int().min(1900).max(2024),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10).default(5),
  poster: z.string().url({
    message: 'Se posteo correctamente la pelicula'
  }),
  genre: z.array(
    z.enum(['Action', 'Adventure', 'Crime', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi']),
    {
      required_error: 'Se debe agregar el genero a la pelicula',
      invalid_type_error: 'Utiliza un genero del los predeterminados'
    }
  )
})

function validateMovie (input) {
  return movieSchema.safeParse(input)
}

function validatePartialMovie (input) {
  return movieSchema.partial().safeParse(input)
}

module.exports = {
  validateMovie,
  validatePartialMovie
}