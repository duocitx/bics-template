import Bics from 'bics';

import 'bics/lib/bics.css';

const modulesContext = require.context('./modules/', true, /module.config\.ts/i);
const routesContext = require.context('./modules/', true, /route\.ts/i);
const servicesContext = require.context('./modules/', true, /.*\/services\/.*\.ts/i);
const moduleMessagesContext = require.context('./modules/', true, /\.message\.ts/i);

const bics = Bics.run({
  el: '#app',
  name: 'CMS',
  icon: 'mdi mdi-18px mdi-format-bold',
  version: '2020.8.1',
  supportCultures: ['en', 'fr'],
  modulesContext,
  routesContext,
  servicesContext,
  moduleMessagesContext
});

export default bics;
