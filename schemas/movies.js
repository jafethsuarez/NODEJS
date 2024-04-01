const z = require('zod')
const movieSchema = z.object(
    {
        title : z.string({
            invalid_type_error: 'Movie title must be a string',
            required_error: 'pls check the title'
        }),
        year : z.number().int().min(1990).max(2024),
        director : z.string(),
        duration : z.number().int().positive(),
        rate : z.number(),
        poster : z.string().url({
            message: 'Poster must be a valid URL'
        }),
        genre : z.array(z.enum(['Action','Adventure','Comedy','Drama','Fantasy','Horror','Crimen','Thriller','Sci-fi'])).nonempty()
    })

function validateMovie(input){
    return movieSchema.safeParse(input)
}

function validatePartialMovie(input){
    return movieSchema.partial().safeParse(input)
}

module.exports= {
    validateMovie, validatePartialMovie
}
