import { LayoutBackend, BicsModuleOptions, BicsModule } from 'bics';
import environment from '@/environment';

const options: BicsModuleOptions = {
  code: 'SAMPLE',
  icon: 'si si-docs',
  title: 'modules.sample.title',
  version: '2020.06.15.1',
  variant: 'success',
  order: 0,
  component: LayoutBackend,
  apiEndpoint: environment.API_ENDPOINT
};
export default new BicsModule(options);
