<template>
  <div class="home">
      <search class="h-sear"></search>

      <div class="home-content">
        <div class="h-nav">
            <leftnav></leftnav>
        </div>
        <div class="h-box">
            <router-view></router-view>
        </div>
      </div>

      <bottom class="h-bot"></bottom>
  </div>
</template>

<script>
import search from './components/search.vue'
import bottom from './components/bottom.vue'
import leftnav from './components/left-nav.vue'
export default {
  components:{
    search,
    leftnav,
    bottom
  },

}
</script>

<style >
  .h-sear{
    position: fixed;
    top:0;
  }
  .h-bot{
    position: fixed;
    bottom: 0;
  }
  .home-content{
    margin-top:60px;
    width: 100%;
    overflow: hidden;
    height:calc(100vh - 120px)
  }
  .home .h-nav{
    float:left;
    width: 150px;
    z-index: 999;
  }
  .h-box{
    width: 100%;
  }
 /* .router-link-active{
      background: rgba(255,255,255,0.8);
      color: gray;
    } */
</style>
