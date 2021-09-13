import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review/review';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[0];

const reviews = {
  id: '5909796d-5030-4e36-adec-68b8f9ec2d96',
  user: 'Antony',
  text: 'Not bad',
  rating: 5,
}

const setUp = () => mount
(<Review 
  key={review.id}
  user={review.user} 
  text={review.text}
  rating={review.rating} 
/>);

let reviewComponent;

beforeEach(() => {
  reviewComponent = setUp();
});

describe('Reviews', () => {
  it('should render Review', () => {
    expect(reviewComponent.find('[data-id="review"]').length).toBe(1);
  });
  
  describe('Field name', () => {
    it('should render', () => {
      expect(reviewComponent.find('[data-id="review_name"]').length).toBe(1);
    });

    it('should equal configure', () => {
      expect(reviewComponent.find('[data-id="review_name"]').text()).toBe(reviews.user);
    });
  });

  describe('Field text', () => {
    it('should render', () => {
      expect(reviewComponent.find('[data-id="review_text"]').length).toBe(1);
    });

    it('should equal configure', () => {
      expect(reviewComponent.find('[data-id="review_text"]').text()).toBe(reviews.text);
    });
  });
  
  describe('Field rating', () => {
    it('should render', () => {
      expect(reviewComponent.find('[data-id="review_rating"]').length).toBe(1);
    });
  });
});
