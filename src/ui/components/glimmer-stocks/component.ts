import Component from "@glimmer/component";

export default class GlimmerStocks extends Component {
  get symbols() {
    return "aapl,msft,goog";
  }
}
