import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import Review from './review/review';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[0];

const reference = {
  id: '5909796d-5030-4e36-adec-68b8f9ec2d96',
  user: 'Antony',
  text: 'Not bad',
  rating: 5,
}

const setUp = (props) => mount(<Reviews reviews={[review]}/>);
// const reviewSetUp = () => mount
// (<Review 
//   key={review.id}
//   user={review.user} 
//   text={review.text}
//   rating={review.rating} 
// />);

let wrapper;

beforeEach(() => {
  wrapper = setUp();
});

describe('Reviews & Review', () => {
  it('should render Reviews', () => {
    expect(wrapper.find('[data-id="rev"]').length).toBe(1);
  });

  it('should render Review', () => {
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });
  
  describe('Review field name', () => {
    it('should render', () => {
      expect(wrapper.find('[data-id="review_name"]').length).toBe(1);
    });

    it('should equal reference', () => {
      expect(wrapper.find('[data-id="review_name"]').text()).toBe(reference.user);
    });
  });

  describe('Review field text', () => {
    it('should render', () => {
      expect(wrapper.find('[data-id="review_text"]').length).toBe(1);
    });

    it('should equal reference', () => {
      expect(wrapper.find('[data-id="review_text"]').text()).toBe(reference.text);
    });
  });
  
  describe('Review field rating', () => {
    it('should render', () => {
      expect(wrapper.find('[data-id="review_rating"]').length).toBe(1);
    });
  });
});
