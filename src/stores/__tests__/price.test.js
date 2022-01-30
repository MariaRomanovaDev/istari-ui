import Prices from '../prices';
import { TokenType } from '../../const';

describe('Price store:', () => {
  it('should fetch both prices', async () => {
    const store = Prices.create({}, { });
    const fP = jest.spyOn(store, 'fetchPrice');

    await store.fetchPrices();

    expect(fP).toHaveBeenCalledWith(TokenType.MEX);
    expect(fP).toHaveBeenCalledWith(TokenType.EGLD);
  });
});
