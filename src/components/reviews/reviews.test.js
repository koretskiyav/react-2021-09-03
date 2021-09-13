import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { restaurants } from '../../fixtures';
import Reviews from './reviews';

Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-name="reviews"]').length).toBe(1);
  });

  it('should render all review', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-name="review"]').length).toBe(reviews.length);
  });

  it('should has class .reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(
      wrapper.find('[data-name="reviews"]').at(0).hasClass('reviews')
    ).toBeTruthy();
  });
});
