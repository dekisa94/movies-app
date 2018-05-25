<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
      <router-link class="navbar-brand" to="/">Movies</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
           <router-link class="nav-item nav-link" to="/login" v-if="!isAuth">Login</router-link>
           <a href="" class="nav-item nav-link" @click="logout" v-if="isAuth">Logout</a>
        </div>
        <movie-search @search-term-change="setSearchTerm"/>
      </div>
    </nav>
  </div>
</template>

<script>
import { authService } from "../service/AuthService";
import MovieSearch from "./MovieSearch";
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "NavBar",
  components: {
    MovieSearch
  },
  data() {
    return {
      // isAuthenticated: authService.isAuthenticated()
    };
  },
  methods: {
    ...mapMutations(["setSearchTerm", "setIsAuthenticated"]),
    logout() {
      authService.logout();
      this.setIsAuthenticated(false);
    }
  },
  computed: {
    ...mapGetters({
      getAuthent: "getIsAuthenticated"
    }),
    isAuth() {
      return this.getAuthent;
    }
  }
};
</script>