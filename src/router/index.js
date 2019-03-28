import Vue from 'vue'
import Router from 'vue-router'
import Werk from '@/pages/WorkPage'
import Upgrades from '@/components/Upgrades'
import Hardware from '@/components/Hardware'
import Werknemers from '@/components/Werknemers'
import Kantoor from '@/components/Kantoor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/werk'
    },
    {
      path: '/werk',
      name: 'Werk',
      component: Werk
    },
    {
      path: '/upgrades',
      name: 'Upgrades',
      component: Upgrades
    },
    {
      path: '/hardware',
      name: 'Hardware',
      component: Hardware
    },
    {
      path: '/werknemers',
      name: 'Werknemers',
      component: Werknemers
    },
    {
      path: '/kantoor',
      name: 'Kantoor',
      component: Kantoor
    }
  ]
})
