import Vue from 'vue'
import Jaoa from './Jaoa.vue'
import Cbs from './Cbs.vue'

const routes = {
  '/jaoa': Jaoa,
  '/cbs': Cbs,
};

new Vue({

  el: '#app',
  
  data: {
    currentRoute: window.location.pathname
  },

  mounted: function() {
    console.log(routes[this.currentRoute]);
  },

  computed: {
    ViewComponent() {
      return routes[this.currentRoute]
    }
  },

  render(h) { return h(this.ViewComponent) }
})
