import Vue from 'vue';
import Router from 'vue-router';

// Components
import Artist from '@/components/Artist';
import Artists from '@/components/Artists';

import Genre from '@/components/Genre';
import Genres from '@/components/Genres';

import Record from '@/components/Record';
import Records from '@/components/Records';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/records',
    },
    {
      path: '/artists',
      name: 'Artists',
      component: Artists,
    },
    {
      path: '/artists/:id',
      name: 'Artist',
      component: Artist,
    },
    {
      path: '/genres',
      name: 'Genres',
      component: Genres,
    },
    {
      path: '/genres/:id',
      name: 'Genre',
      component: Genre,
    },
    {
      path: '/records',
      name: 'Records',
      component: Records,
    },
    {
      path: '/records/:id',
      name: 'Record',
      component: Record,
    },
  ],
});
