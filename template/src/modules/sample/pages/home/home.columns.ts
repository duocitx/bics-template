import { Column, Storage } from 'bics';
import moduleOptions from '../../module.config';

const { name } = moduleOptions;
const storageKey = `modules.${name}.pages.home.columns`;

const columnsFromStorage = Storage.get(storageKey);

const columns: Column[] = (columnsFromStorage as Column[]) || [
  {
    field: 'title',
    title: 'fields.name',
    visible: true,
    width: 200,
    sortable: true,
    fixed: true,
    explain: 'Tiêu đề'
  },
  {
    field: 'created_at',
    title: 'fields.date_created',
    dataType: 'date',
    visible: true,
    width: 160,
    sortable: true,
    dataFormat: 'short'
  },
  {
    field: 'summary',
    title: 'modules.sample.pages.home.fields.summary',
    visible: false
  },
  {
    field: 'keywords',
    title: 'modules.sample.pages.home.fields.keywords',
    visible: false
  },
  {
    field: 'description',
    title: 'modules.sample.pages.home.fields.description'
  }
];

export default columns;
