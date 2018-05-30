<template>
    <div>
    <div class="row"
    :class="{ 'highlighted': isSelected }">
    

        
        <div class="col-sm" v-text="movie.id"></div>
        <div class="col-sm"><router-link :to="{ name: 'single-movie', params:{id: movie.id}}">{{movie.title}}</router-link></div>
        <div class="col-sm" v-text="movie.releaseDate"></div>
        <div class="col-sm" v-text="movie.director"></div>
        <div class="col-sm" v-text="movie.genre"></div>
        <button class="btn btn-primary" @click="onSelected">Select/Deselect</button>

    </div>
    </div>
</template>

<script>
export default {
  name: "MovieRow",
  props: {
    movie: {
      type: Object,
      required: true
    },
    selectedMoviesIds: {
      trpe: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {
    onSelected() {
      this.$emit("on-selected-movie", this.movie, !this.isSelected);
    }
  },
  computed: {
    isSelected() {
      return this.selectedMoviesIds.indexOf(this.movie.id) > -1;
    }
  }
};
</script>
<style>
.highlighted {
  border: solid 2px;
  background: #66ccff;
}
</style>
