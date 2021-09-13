import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';
import Review from './review';
import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews;

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={review} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });

  it('should render user name', () => {
    const wrapper = mount(<Review key={review[0].id} {...review[0]} />);
    expect(wrapper.find('[data-id="user"]').text()).toBe(review[0].user);
  });

  it('should render user text', () => {
    const wrapper = mount(<Review key={review[0].id} {...review[0]} />);
    expect(wrapper.find('[data-id="text"]').text()).toBe(review[0].text);
  });

});
