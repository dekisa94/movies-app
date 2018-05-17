<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
      <router-link class="navbar-brand" to="/">Movies</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <!-- <router-link class="nav-item nav-link" to="/movies">Movies</router-link> -->
        </div>
        <movie-search @search-term-change="setSearchTerm"/>
      </div>
    </nav>
  </div>
</template>

<script>
import MovieSearch from './MovieSearch'
import { mapMutations } from 'vuex';
export default {
  name: 'NavBar',
  components:{
    MovieSearch
  },
  methods:{
    ...mapMutations([
      'setSearchTerm'
    ])
  }

}
</script>