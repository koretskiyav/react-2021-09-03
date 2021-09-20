<<<<<<< HEAD
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
=======
import { mount } from 'enzyme';
import Review from './review';

import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[1];

const render = (data) => mount(<Review {...data} />);

describe('Review', () => {
  let reviewsCount, name, text, rate;

  beforeEach(() => {
    const wrapper = render(review);
    reviewsCount = wrapper.find('Review').length;
    name = wrapper.find('[data-id="review-user"]').text();
    text = wrapper.find('[data-id="review-text"]').text();
    rate = wrapper.find('svg[data-id="full-star"]').length;
  });

  it('should render review', () => {
    expect(reviewsCount).toBe(1);
  });

  it('should render user name', () => {
    expect(name).toBe(review.user);
  });

  it('should render text', () => {
    expect(text).toBe(review.text);
  });

  it(`should render ${review.rating} fulled stars`, () => {
    expect(rate).toBe(review.rating);
  });
});

describe('Anonymous Review', () => {
  it('should render anonymous name', () => {
    const wrapper = render({ rating: 1 });
    expect(wrapper.find('[data-id="review-user"]').text()).toBe('Anonymous');
  });
});
>>>>>>> 3944b2fd47b9f31c83e11dd8340d63714071f432
