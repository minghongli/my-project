<template>
<div class="douban-header">
  <div class="douban-header-container">
    <div class="douban-search">
      <a href="" class="title">豆瓣电影</a>
      <div class="search-container"></div>
      <img src="https://img3.doubanio.com/f/movie/9f89b66fd864158832aa65002525bb34fb029a56/pics/movie/events/annual2016/ad_web.png" class="douban-title-img">
    </div>
    <div class="douban-bar">
      <ul>
        <li v-for="bar in barList">
          <router-link :to="bar.url">{{bar.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "header",
      data(){
          return {
            barList:[
              {title:'正在热映',url:'/'},
              {title:'即将上映',url:'/upcoming'},
              {title:'Top250',url:'/top250'}
            ]
          }
      },
      methods:{

      }
    }
</script>

<style lang="less" rel="stylesheet/less">
@import "../style/color.less";
  .douban-header{
    background: @mainColor;
    width: 100%;
    height:114px;

    .douban-bar{
      width:950px;
      margin: 0 auto;
      height: 20px;
    }
    ul{
      li{
        list-style: none;
        float:left;
        line-height: 20px;
        cursor: pointer;

        a{
          display: inline-block;
          padding: 8px;
          font-size: 12px;
          color: #aaa;
          text-decoration: none;
        }
        a.active{
          color: @doubanColor;
        }
      }
    }
  }

  .douban-header-container{
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid @line;

    .douban-search {
      width: 950px;
      margin: 0 auto;
      height: 75px;

      .title {
        color: @doubanColor;
        font-size: 30px;
        font-weight: bold;
        line-height: 75px;
      }
      .search-container {
        display: inline-block;
        line-height: 75px;
        vertical-align: top;
        width: 500px;
        margin-left: 50px;
        input {
          height: 34px;
        }
      }
      .douban-title-img {
        width: 175px;
        height: 90px;
        float: right;
        margin-top: 10px;
      }

    }
  }
</style>
