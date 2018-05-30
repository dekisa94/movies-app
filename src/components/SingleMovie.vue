<template>
<div class="container">
    <div class="card text-center">
        <div class="card-header">
            {{movie.director}}
        </div>
        <div class="card-body">
            <h5 class="card-title">{{movie.title}}</h5>
            <p class="card-text">Duration of movie: {{movie.duration}}, relese date: {{movie.releaseDate}} and created at: {{movie.created_at}}</p>
        </div>
        <div class="card-footer text-muted">
            {{movie.genre}}
        </div>
    </div>
</div>
</template>

<script>
import { movieService } from "../service/MovieService";
export default {
  data() {
    return {
      movie: []
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      movieService.getOne(vm.$route.params.id).then(response => {
        vm.movie = response.data;
      });
    });
  }
};
</script>
