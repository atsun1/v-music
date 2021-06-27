<template>
  <div class="found">
      <!-- 轮播图 -->
       <div class="banner">
         <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
           <van-swipe-item v-for="(ite,index) in banner" :key="index">
              <img :src="ite.imageUrl" alt="" >
           </van-swipe-item>

         </van-swipe>
       </div>

      <!-- 推荐歌单 -->
      <div class="gedan">
        <van-grid :gutter="10" icon-size="150" >
          <van-grid-item v-for="(ite,index) in gedan" :key="index"  :icon="ite.picUrl" :text="ite.copywriter"  />
        </van-grid>
      </div>

      
  </div>
</template>

<script>
export default{
  data(){
    return{
      banner:[],
      gedan:[]
    }
  },
  created(){
    this.$http.get("/banner").then(res=>{
      console.log(res.data.banners)
      this.banner = res.data.banners
    })

    this.$http.get(
      "/personalized",
      {
        params:{
          limit:'8',
          },
       },
    ).then(res=>{
      console.log(res)
      this.gedan = res.data.result
      // this.banner = res.data.banners
    })

  }
}
</script>

<style scoped>
  .found{

  }
  .banner{
    margin:30px auto;
    border-radius: 15px;
    overflow: hidden;
    width: 540px;
    height:200px;
  }
  .gedan{
    width: 100%;
  }
  .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
    }
    .my-swipe .van-swipe-item img{
      width: 540px;
      height:200px
    }
</style>
