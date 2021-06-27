<template>
  <div class="left">
     <li> <router-link to="./found">发现音乐</router-link>   </li>
     <li> <router-link to="./recommended">推荐歌单</router-link>   </li>
     <li> <router-link to="./new">最新音乐</router-link>   </li>
     <li> <router-link to="./new-mv">最新MV</router-link>   </li>

  </div>
</template>

<script>
</script>

<style scoped>
  .left{
    /* display: flex; */
    text-align: center;
    padding:20px 0;
    background-color: #DCDEE0;
    height:100vh
  }
  .left li{
    margin-bottom:20px ;
  }
  .left li a {
    color:#323233
  }
</style>
