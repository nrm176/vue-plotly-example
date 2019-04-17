<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Chart />
    <Chart2 />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Chart from '../components/Chart'
import Chart2 from '../components/Chart2'

export default {
  name: 'home',
  components: {
    Chart2,
    Chart,
    HelloWorld
  }
}
</script>
