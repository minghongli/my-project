<template>
  <div class="moving">
    <div class="tit">
      <h1>电影票 - {{city}}</h1>
      <div class="locat"></div>
    </div>
  </div>
<!--  <MoviesTag :data="moveList" class="movieTag"></MoviesTag>-->
</template>

<script>
    export default {
        name: "moving",

      data(){
          return {
            city:'北京',
            citys:[
              {name:'北京'},
              {name:'上海'},
              {name:'广州'},
              {name:'深圳'},
              {name:'杭州'}
            ]
          }
      },
      components:{
          'MoviesTag':(resolve)=>{
            require(['./common/moviesTag.vue'],resolve);
          }
      },
      computed:{
        moveList(){

        }
      }
    }
</script>

<style lang="less" rel="stylesheet/less">
/*  @import '../../style/base.less';*/
</style>
