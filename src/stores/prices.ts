import { flow, Instance, types } from 'mobx-state-tree';
import { TokenType } from '../const';

const Prices = types.
  model('Prices', {
    egldPrice: types.optional(types.number, 0),
    mexPrice: types.optional(types.number, 0),
  })
  .actions(() => ({
    // eslint-disable-next-line consistent-return
    fetchPrice: flow(function* fetchPrice(tokenType: string) {
      try {
        const resp = yield fetch(`http://localhost:8088/price?type=${tokenType}`,
          { headers: { "Content-Type": "application/json" }
          });
        const data = yield resp.json();
        return data.price;
      } catch (e) {
        console.error('Fetch Price: ', e);
      }
    }),
  }))
  .actions((self) => ({
    fetchPrices: flow(function* fetchPrices() {
      self.mexPrice = yield self.fetchPrice(TokenType.MEX);
      self.egldPrice = yield self.fetchPrice(TokenType.EGLD);
    }),
  }));

export default Prices;
export interface IPrices extends Instance<typeof Prices> {}