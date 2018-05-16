import axios from 'axios'
export default class MovieService
{
    constructor(){
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }
    getAll(term='')
    {
        return axios.get('movies',{params: {term}})
    }
    store(movie)
    {
        return axios.post('movies', movie)
    }
}
export const movieService = new MovieService()