<template>
  <div class="search">
    <input type="text" class="sea" v-model="search" @keydown.enter="tosear">
  </div>
</template>

<script>
  export default{
    data(){
      return{
        search:''
      }
    },
    methods:{
      tosear(){
        // console.log('555555555555555')
        this.$router.push('/search-res?q='+this.search)
      }
    }
  }
</script>

<style>
  .search{height:60px;width: 100%;background-color:#E8E8E8;display: flex;align-items: center;justify-content: flex-end;}
  .sea{border:1px solid #DCDEE0;border-radius: 5px;margin-right: 50px;}
</style>
