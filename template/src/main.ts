import Bics from 'bics';

import 'bics/lib/bics.css';

const modules_directory = './modules/';

const modulesContext = require.context(modules_directory, true, /module\.config\.ts/i);
const routesContext = require.context(modules_directory, true, /route\.ts/i);
const servicesContext = require.context(modules_directory, true, /\.service\.ts/i);
const moduleMessagesContext = require.context(modules_directory, true, /\.message\.ts/i);

const bics = Bics.run({
  el: '#app',
  name: '{{short_name}}',
  icon: 'mdi mdi-18px mdi-format-bold',
  version: '2020.8.1',
  supportCultures: ['en', 'fr'],
  modulesContext,
  routesContext,
  servicesContext,
  moduleMessagesContext
});

export default bics;
