import Enzyme, { mount } from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Rate from '../../rate/';
import Review from './review';
import { restaurants } from '../../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[0];

describe('Tests for Review component', () => {
  it('should render', () => {
    const wrapper = mount(<Review rating={review.rating} text={review.text} user={review.user} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  })

  it('should render name of User', () => {
    const wrapper = mount(<Review rating={review.rating} text={review.text} user={review.user} />);
    expect(wrapper.find('[data-id="reviewUserName"]').text()).toBe(review.user);
  })

  it('should render text of review',  () => {
    const wrapper = mount(<Review rating={review.rating} text={review.text} user={review.user} />);
    expect(wrapper.find('[data-id="reviewUserComment"]').text()).toBe(review.text);
  })

  it('should render Rate component', () => {
    const wrapper = mount(<Review rating={review.rating} text={review.text} user={review.user} />);
    expect(wrapper.find('[data-id="reviewUserRate"]').length).toBe(1);
  })

  it('Should be 5 stars, 3 of which are checked', () => {
    const rating = 3;
    const wrapper = mount(<Review rating={rating} text={review.text} user={review.user} />);
    const aStars = wrapper.find(Rate).find('svg.star');
    
    expect(aStars.length).toBe(5);
    expect(aStars.find('svg.checked').length).toBe(rating);
  })
})