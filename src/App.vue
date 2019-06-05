<template>
  <div id="app">
      <!-- 导航栏 -->
      <c-header></c-header>
      <!-- 内容区 -->
      <section>
          <router-view></router-view>
      </section>
  </div>
</template>

<script>
import './assets/css/index.css'
import cHeader from './views/header.vue'

export default {
  name: 'App',
  components: {
      cHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
