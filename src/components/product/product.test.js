import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Product from './product';
import Button from '../button/button';
import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const product = restaurants[0].menu[0];
const setUp = () => mount(<Product product={product} />);


let component;

beforeEach(() => {
  component = setUp();
});

it('should render decrement', () => {
  const wrapper = mount(<Product product={product} />);
  expect(wrapper.find('button[data-id="product-decrement"]').length).toBe(1);
});

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

  it('should fetch data', () => {
    const fn = jest.fn();
    mount(<Product product={product} fetchData={fn} />);
    expect(fn).toBeCalledWith(product.id);
  });

  it('should decrement menu', () => {
    const wrapper = mount(<Product product={product} />);
    wrapper.find('button[data-id="product-increment"]').simulate('click');
    wrapper.find('button[data-id="product-increment"]').simulate('click');
    wrapper.find('button[data-id="product-decrement"]').simulate('click');
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('1');
  });

  //Рендер декремента

  it('should render decrement', () => {
    const wrapper = setUp();
    expect(wrapper.find('button[data-id="product-decrement"]').length).toBe(1);
  });

  //Тест по клику на "-"

  it('should be 0 after click', () => {
    const btn = component.find('button[data-id="product-decrement"]');
    const amount = setUp();
    btn.simulate('click');
    expect(amount.find('[data-id="product-amount"]').text()).toBe('0');
  });

  //Тест с помощью мока функции (без нажатия на инкремент)
  
  it('should return mock', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<Button onClick={mockCallBack} />);
    expect(mockCallBack.mock.calls.length).toBe(0);
    wrapper.simulate('click');
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});
