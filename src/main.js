import Vue from 'vue'
import App from './App.vue'
import VueTailwind from 'vue-tailwind'
import TButton from 'vue-tailwind/dist/t-button'

Vue.config.productionTip = false

const settings = {
  't-button': {
    component: TButton,
  },
}

Vue.use(VueTailwind, settings)

new Vue({
  render: h => h(App),
}).$mount('#app')
