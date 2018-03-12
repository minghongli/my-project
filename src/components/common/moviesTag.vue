<template>
  <div class="moviesList" v-loading="loadingMoving">
    <div class="movie-container">
      <div class="moveTag">

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "movies-tag",
      props:{
        data:Object
      },
      data(){
          return {
            value:0,
            subject:{},
            maxMun:12
          }
      },
      method:{
        showDetail(id){

        }
      }
    }
</script>

<style scoped>

</style>
