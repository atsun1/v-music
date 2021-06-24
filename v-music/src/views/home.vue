<template>
  <div>
      <search></search>

      <div class="home-content">
        <div class="h-nav">
            <leftnav></leftnav>
        </div>
        <div class="h-box">
            <router-view></router-view>
        </div>
      </div>

      <bottom></bottom>
  </div>
</template>

<script>
import search from './search.vue'
import bottom from './bottom.vue'
import leftnav from './left-nav.vue'
export default {

  components:{
    search,
    leftnav,
    bottom
  }
}
</script>

<style>
</style>
