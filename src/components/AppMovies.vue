<template>
    <div class="container">
        <form @submit.prevent="storeMovie">
          <h2>Add new movie</h2>
            <div class="form-group">
                <label for="title">Movie title</label>
                <input v-model="movieForm.title" 
                    type="text" 
                    id="title" 
                    name="title" 
                    class="form-control" 
                />
            </div>
            <div class="form-group">
                <label for="director">Movie director</label>
                <input v-model="movieForm.director" 
                    type="text" 
                    id="director" 
                    name="director" 
                    class="form-control" 
                />
            </div>
            <div class="form-group">
                <label for="imageUrl">image Url</label>
                <input v-model="movieForm.imageUrl" 
                    type="text" 
                    id="imageUrl" 
                    name="imageUrl" 
                    class="form-control" 
                />
            </div>
            <div class="form-group">
                <label for="duration">Movie duration</label>
                <input v-model="movieForm.duration" 
                    type="text" 
                    id="duration" 
                    name="duration" 
                    class="form-control" 
                />
            </div>
            <div class="form-group">
                <label for="releaseDate">Release Date</label>
                <input v-model="movieForm.releaseDate" 
                    type="text" 
                    id="releaseDate" 
                    name="releaseDate" 
                    class="form-control" 
                />
            </div>
            <div class="form-group">
                <label for="genre">Movie genre</label>
                <input v-model="movieForm.genre" 
                    type="text" 
                    id="genre" 
                    name="genre" 
                    class="form-control" 
                />
            </div>
            <div class="form-group">
                <input type="submit" class="btn btn-success" />
            </div>
      </form>
      <ul class="list-group" v-for="(movie, key) in movies" :key="key">
            <li class="list-group-item">{{movie.title}}</li>
        </ul>
    </div>
</template>

<script>
import {movieService} from '../service/MovieService'
export default {
    data(){
        return{
            movies: [],
            movieForm: {title: '', director: '', imageUrl: '', duration: '', releaseDate: '', genre: '' }
        }
    },
    beforeRouteEnter (to, from, next) {
    movieService.getAll()
      .then((response) => {
        next((vm) => {
          vm.movies = response.data
        })
      }).catch((error) => {
        console.log(error)
      })
  },
  methods:{
      storeMovie(){
          movieService.store(this.movieForm)
      }
  }
}
</script>
