import { RouteConfig } from 'vue-router';
import moduleOptions from '../../module.config';

const { name } = moduleOptions;

const routes: RouteConfig[] = [
  {
    path: 'home',
    name: `${name}-home`,
    component: () => import(/* webpackChunkName: "sample-63732682449" */'./home.page.vue'),
    meta: {
      title: `modules.${name}.pages.home.title`,
      navigation: true,
      icon: 'si si-docs',
      order: 2
    }
  }
];

export default routes;
