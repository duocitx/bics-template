import { LayoutBackend, BicsModuleOptions, BicsModule } from 'bics';

const options: BicsModuleOptions = {
  code: 'SAMPLE',
  icon: 'si si-docs',
  title: 'modules.sample.title',
  version: '2020.06.15.1',
  variant: 'success',
  order: 0,
  component: LayoutBackend,
  apiEndpoint: 'https://localhost:44341'
};
export default new BicsModule(options);
