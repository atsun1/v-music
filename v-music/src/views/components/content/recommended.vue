<template>
  <div class="new">

     <h3>最新音乐</h3>
     <van-grid  column-num="2">
       <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
     </van-grid>
  </div>
</template>

<script>
  export default{
    created(){
      this.$http.get(
        '/personalized/newsong'
      ).then(res=>{
        console.log(res)
      })
    }
  }
</script>

<style scoped>

</style>
