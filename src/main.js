import Vue from 'vue'
import Jaoa from './Jaoa.vue'
import Cbs from './Cbs.vue'
import Home from './Home.vue'

$(document).ready(function() {

  if (window.location.pathname !== '/cbs') return;

  // Add a sticky sidebar
  const $window = $(window);
  const $sidebar = $('#form');
  const stickValue = 170

  $window.scroll(function() {
    if ( $window.scrollTop() >= stickValue ) {
      $sidebar.addClass('stick');
    } else {
      $sidebar.removeClass('stick');
    }
  });
});

const routes = {
  '/': Home,
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
