<<<<<<< HEAD
import Enzyme, {mount} from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';
import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter()});

const reviews = restaurants[0].reviews;

describe('Tests for Reviews component', () => {
  it('Should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
    expect(wrapper.find('[data-id="reviewsReview"]').length).toBe(2)
  })
})
=======
import { mount } from 'enzyme';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;

describe('Reviews', () => {
  it('should render reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(2);
  });
});
>>>>>>> 3944b2fd47b9f31c83e11dd8340d63714071f432
