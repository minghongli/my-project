import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import moving  from '@/components/moving.vue'
import upcoming  from '@/components/upcoming.vue'


Vue.use(Router)

export default new Router({
  routes: [
/*    {
      path: '/',
      name: 'Hello',
      component: Hello
    },*/
    {
      path: '/',
      name: 'moving',
      component: moving
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: upcoming
    }
  ]
})
