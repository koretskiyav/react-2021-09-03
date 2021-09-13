import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';


Enzyme.configure({ adapter: new Adapter() });

const review = {user:'Antony',text: 'Not bad',rating: 5};

describe('Review', () => {
  it('should render review', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });

  it('should render review user name', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-user"]').text()).toBe('Antony');
  });

  it('should render review user comment', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-comment"]').text()).toBe('Not bad');
  });

  it('should render review user rate', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-rate"]').length).toBe(1);
  });

});
