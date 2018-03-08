import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Record from '@/components/Record';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/records/:id',
      name: 'Record',
      component: Record,
    },
  ],
});
