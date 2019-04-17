import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Plotly from 'plotly.js-dist'

Vue.config.productionTip = false

Vue.component('reactive-chart', {
  props: ['chart'],
  template: '<div :ref="chart.uuid"></div>',
  mounted () {
    Plotly.plot(this.$refs[this.chart.uuid], this.chart.traces, this.chart.layout)
  },
  watch: {
    chart: {
      handler: function () {
        Plotly.react(
          this.$refs[this.chart.uuid],
          this.chart.traces,
          this.chart.layout
        )
      },
      deep: true
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
