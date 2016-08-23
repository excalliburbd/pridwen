import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';

import App from '../../src/components/App.js';

const wrapper = shallow(<App />);

describe('(Component) App', function() {
  it('should exist', function() {
      assert.isOk(wrapper);
  });
});
