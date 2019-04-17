<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Chart />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Chart from '../components/Chart'

export default {
  name: 'home',
  components: {
    Chart,
    HelloWorld
  }
}
</script>
