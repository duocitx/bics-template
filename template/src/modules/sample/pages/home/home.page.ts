import { Component, Inject, Mixins } from 'vue-property-decorator';
import { ListPage, PageHeading, Breadcrumb, Grid, Column } from 'bics';
import HomeService from './services/home.service';
import columns from './home.columns';
import moduleOptions from '../../module.config';

const { name } = moduleOptions;
const page_title = `modules.${name}.pages.home`;

@Component({
  name: 'HomePage',
  components: {
    PageHeading,
    Breadcrumb,
    Grid
  }
})
export default class HomePage extends ListPage {
  @Inject(HomeService.ServiceName) service!: HomeService;

  columns: Column[] = columns;
  title = page_title;
}
