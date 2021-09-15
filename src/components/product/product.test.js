<<<<<<< HEAD
import Enzyme, { mount, shallow } from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Button from '../button/';
=======
import { mount } from 'enzyme';
>>>>>>> 3944b2fd47b9f31c83e11dd8340d63714071f432
import Product from './product';

import { restaurants } from '../../fixtures';

const product = restaurants[0].menu[0];

const selectors = {
  product: '[data-id="product"]',
  amount: '[data-id="product-amount"]',
  increment: 'button[data-id="product-increment"]',
  decrement: 'button[data-id="product-decrement"]',
};

function render(props) {
  const wrapper = mount(<Product product={product} {...props} />);

  return {
    getProductsCount: () => wrapper.find(selectors.product).length,
    getAmount: () => wrapper.find(selectors.amount).text(),
    increase: () => wrapper.find(selectors.increment).simulate('click'),
    decrease: () => wrapper.find(selectors.decrement).simulate('click'),
  };
}

describe('Product', () => {
  it('should render', () => {
    const testKit = render();
    expect(testKit.getProductsCount()).toBe(1);
  });

  it('should init from 0 amount', () => {
    const testKit = render();
    expect(testKit.getAmount()).toBe('0');
  });

  it('should increment amount', () => {
    const testKit = render();
    testKit.increase();
    expect(testKit.getAmount()).toBe('1');
  });

<<<<<<< HEAD
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

=======
  it('should fetch data on mount', () => {
    const fn = jest.fn();
    render({ fetchData: fn });
    expect(fn).toBeCalledWith(product.id);
  });

  it('should init with amount 2', () => {
    const testKit = render({ initialCount: 2 });
    expect(testKit.getAmount()).toBe('2');
  });

  it('should decrement amount', () => {
    const testKit = render({ initialCount: 4 });
    testKit.decrease();
    expect(testKit.getAmount()).toBe('3');
  });

  it("shouldn't decrement with 0 amount", () => {
    const testKit = render();
    testKit.decrease();
    expect(testKit.getAmount()).toBe('0');
  });
>>>>>>> 3944b2fd47b9f31c83e11dd8340d63714071f432
});
