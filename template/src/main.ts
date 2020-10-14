import Bics, { auth_manager, IAuthConfig } from 'bics';

import './registerServiceWorker';

import 'bics/lib/bics.css';
import environment from './environment';

const modulesContext = require.context('./modules/', true, /module\.config\.ts/i);
const routesContext = require.context('./modules/', true, /route\.ts/i);
const servicesContext = require.context('./modules/', true, /\.service\.ts/i);
const moduleMessagesContext = require.context('./modules/', true, /\.message\.ts/i);

auth_manager.configure({
  authority: environment.AUTH_ENDPOINT,
  client_id: '{{short_name}}',
  scope: 'openid profile',
  response_type: 'code'
} as IAuthConfig);

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
