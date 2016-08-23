import reducer, { defaultState } from 'redux/modules/todoApp';
import deepFreeze from 'deep-freeze';

describe('(Redux) todoApp', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(defaultState);
    });
  });
});
