import Component, { tracked } from '@glimmer/component';
import ArrayUtil from './array-util';

const url = 'https://www.google.com/finance/info?q='

export default class StockQuotes extends Component {
  @tracked quotes: any;

  constructor(options) {
    super(options);
    this.loadQuotes();
  }

  parseQuotes(data) {
    let raw = new ArrayUtil().arrayToString(data.value);
    return JSON.parse(raw.slice(3,raw.length));
  }

  async loadQuotes() {
    let response = await fetch(`${url}${this.args['symbols']}`);
    let data = await response.body.getReader().read();

    this.quotes = this.parseQuotes(data);
  }

};
