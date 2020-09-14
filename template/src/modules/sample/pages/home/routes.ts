import { RouteConfig } from 'vue-router';
import moduleOptions from '../../module.config';

const { name } = moduleOptions;

const routes: RouteConfig[] = [
  {
    path: 'sample',
    name: `${name}-sample`,
    component: () => import(/* webpackChunkName: "sample-63732682449" */'./sample.page.vue'),
    meta: {
      title: `modules.${name}.pages.sample.title`,
      navigation: true,
      icon: 'si si-docs',
      order: 2
    }
  }
];

export default routes;
