import Enzyme, { mount, shallow } from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Button from '../button/';
import Product from './product';
import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const product = restaurants[0].menu[0];

describe('Product', () => {
  it('should render', () => {
    const wrapper = mount(<Product product={product} />);
    expect(wrapper.find('[data-id="product"]').length).toBe(1);
  });

  it('should init from 0 amount', () => {
    const wrapper = mount(<Product product={product} />);
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('0');
  });

  it('should increment amount', () => {
    const wrapper = mount(<Product product={product} />);
    wrapper.find('button[data-id="product-increment"]').simulate('click');
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('1');
  });

  it('should decrement amount', () => {
    const wrapper = mount(<Product product={product} />);
    wrapper.find('button[data-id="product-increment"]').simulate('click');
    wrapper.find('button[data-id="product-increment"]').simulate('click');
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('2');
    wrapper.find('button[data-id="product-decrement"]').simulate('click');
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('1');
    wrapper.find('button[data-id="product-decrement"]').simulate('click');
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('0');
    wrapper.find('button[data-id="product-decrement"]').simulate('click');
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('0');
  });

  it('should decrement amount - 2', () => {
    // Я пытался реализовать через spyOn, но ничего не вышло...
    // По возможности, просьба показать, как это можно сделать.
    const decrement = jest.fn();
    const wrapper = mount(<Button icon='minus' onClick={decrement} />);

    expect(decrement).toHaveBeenCalledTimes(0);
    wrapper.simulate('click');
    expect(decrement).toHaveBeenCalledTimes(1);

  })

});
