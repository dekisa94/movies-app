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
      <h2>List of movies</h2>
      <div>Selected: {{ selectedMoviesCounter }}</div>
      <movie-search @search-term-change="onSearchTermChanged"/>
      <movie-row 
        v-for="(movie, key) in currentlyVisibleMovies" 
        :key="key" 
        :movie="movie"
        @on-selected-movie="onSelectedMovie"
        :selectedMoviesIds="selectedMoviesIds"
      />

        <movies-paginator
        :pages="pages"
        v-if="pages > 1"
        @selected-page="onSelectedPage"
        :selectedPage="selectedPage"
        />

      <button class="btn btn-success" @click="selectAll">Select All</button>
      <button class="btn btn-danger" @click="deselectAll">Deselect All</button>
      <div v-if="!movies.length">
        <h3>No Movies Found</h3>
      </div>
    </div>
</template>

<script>
import {movieService} from '../service/MovieService'
import MovieRow from './MovieRow'
import MovieSearch from './MovieSearch'
import MoviesPaginator from './MoviesPaginator'
export default {
    components:{
        MovieRow,
        MovieSearch,
        MoviesPaginator
    },
    data(){
        return{
            selectedPage: 1,
            movies: [],
            selectedMoviesIds: [],
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
      },
      onSearchTermChanged(term){
          movieService.getAll(term)
          .then((response) => {
              this.movies=response.data
              console.log(response.data)
          })
      },
      onSelectedMovie(movie, isSelected) {
      if (!isSelected) {
        let movieIndex = this.selectedMoviesIds.indexOf(movie.id)
        this.selectedMoviesIds.splice(movieIndex, 1)
        return;
      }
      this.selectedMoviesIds.push(movie.id)

    },
    deselectAll(){
        this.selectedMoviesIds=[]

    },
    selectAll(){
        this.movies.forEach(movie =>{
            if (this.selectedMoviesIds.indexOf(movie.id) > -1){
                return
            }
            this.selectedMoviesIds.push(movie.id)
        })
    },
    onSelectedPage(page){
        this.selectedPage=page
    }
  },
  computed:{
      selectedMoviesCounter() {
      return this.selectedMoviesIds.length
    },
    pages(){
        return Math.ceil(this.movies.length / 5)
    },
    currentlyVisibleMovies(){
        let bottomLimit = (this.selectedPage -1) * 5
        let topLimit = bottomLimit + 5
        return this.movies.filter((movie, index) => {
            return index >= bottomLimit && index < topLimit
        })
    }
  }
}
</script>
