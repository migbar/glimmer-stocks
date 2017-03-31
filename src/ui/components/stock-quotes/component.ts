import Component, { tracked } from '@glimmer/component';
import ArrayUtil from './util';

const url = 'https://www.google.com/finance/info?q='

export default class StockQuotes extends Component {  
  @tracked
  quotes: any;

  constructor(options) {
    super(options);
    this.loadQuotes();
  }

  parseQuotes(data) {        
    let raw = new ArrayUtil().arrayToString(data.value);    
    let quotes = JSON.parse(raw.slice(3,raw.length));    
    this.quotes = quotes;
  }

  async loadQuotes() {
    let response = await fetch(`${url}${this.args['symbols']}`)    
    let data = await response.body.getReader().read();
    return this.parseQuotes(data);
  }

};
