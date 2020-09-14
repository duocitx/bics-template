import { BaseService } from 'bics';
import moduleOptions from '../../../module.config';

export default class HomeService extends BaseService {
  constructor() {
    super(`${moduleOptions.api_endpoint}/sample`);
  }

  static get ServiceName() {
    return `${moduleOptions.name}-HomeService`;
  }
}
