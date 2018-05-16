<template>
    <div> {{deselect}} {{select}}
    <div class="row"
    :class="{ 'highlighted': selected }">
    

        
        <div class="col-sm" v-text="movie.id"></div>
        <div class="col-sm" v-text="movie.title"></div>
        <div class="col-sm" v-text="movie.releaseDate"></div>
        <div class="col-sm" v-text="movie.director"></div>
        <div class="col-sm" v-text="movie.genre"></div>
        <button class="btn btn-primary" @click="onSelected">Select</button>

    </div>
    </div>
</template>

<script>
export default {
    name: 'MovieRow',
    props:{
        movie:{
            type: Object,
            required: true
        },
        isDeselect:{},
        isSelectAll:{}
    },
    data(){
        return{
            selected: false
        }
    },
    methods:{
        onSelected(){
            this.selected=true
            this.$emit('on-selected-movie', this.movie)
        }
    },
    computed:{
        deselect(){
            if(this.isDeselect)
            this.selected=false
        },
        select(){
            if(this.isSelectAll)
            this.selected=true
        }
    }
}
</script>
<style>
.highlighted {
    border: solid 2px;
    background: #66ccff;
}
</style>
