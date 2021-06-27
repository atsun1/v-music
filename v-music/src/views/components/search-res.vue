<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="歌曲">内容 1</van-tab>
      <van-tab title="歌单">内容 2</van-tab>
      <van-tab title="MV">内容 3</van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default{
    created(e){
      console.log('55555555555555555555')
      console.log( this.$route)
    },
    data(){
      return{
        active: 1,
      }
    }
  }
</script>

<style>
</style>
