import Counter from './components/Counter.vue';
import PageB from './components/PageB.vue';

export function configRouter (router) {
  router.map({
    '/counter': {
      component: Counter,
    },
    '/page-b': {
      component: PageB,
    },
  });
}
