import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review/review';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews;
const setUp = () => mount
(<Review 
  user={review.user} 
  text={review.text}
  rating={review.rating} 
/>);

let reviewComponent;

beforeEach(() => {
  reviewComponent = setUp();
});

describe('Reviews', () => {
  it('should render', () => {
    expect(reviewComponent.find('[data-id="review"]').length).toBe(1);
  });
  
  describe('Field name', () => {
    it('should render', () => {
      expect(reviewComponent.find('[data-id="review_name"]').length).toBe(1);
    });
  });

  describe('Field text', () => {
    it('should render', () => {
      expect(reviewComponent.find('[data-id="review_text"]').length).toBe(1);
    });
  });
  
  describe('Field rating', () => {
    it('should render', () => {
      expect(reviewComponent.find('[data-id="review_rating"]').length).toBe(1);
    });
  });

  
});
