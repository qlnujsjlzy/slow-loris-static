<template>
  <div id="app" style="height: 100%;">
    <div v-show="isLoading">加载中</div>
    <router-view v-show="!isLoading"></router-view>
  </div>
</template>

<style lang="less">
  @import "./styles/app.less";
  @import "./styles/demo.less";
</style>

<script type="text/babel">
  export default {
    computed: {
      isLoading () {
        return this.$store.state.isLoading
      }
    }
  }
</script>
