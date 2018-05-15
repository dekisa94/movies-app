import axios from 'axios'
export default class MovieService
{
    constructor(){
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }
    getAll()
    {
        return axios.get('movies')
    }
}
export const movieService = new MovieService()