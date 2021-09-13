import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Rate from '../../rate/';
import Review from './review';
import { restaurants } from '../../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[0];

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review rating={review.rating} text={review.text} user={review.user} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  })

  it('should render name', () => {
    const wrapper = mount(<Review rating={review.rating} text={review.text} user={review.user} />);
    expect(wrapper.find('[data-id="user-name"]').text()).toBe(review.user);
  })

  it('should render text',  () => {
    const wrapper = mount(<Review rating={review.rating} text={review.text} user={review.user} />);
    expect(wrapper.find('[data-id="user-text"]').text()).toBe(review.text);
  })

  it('should render rate', () => {
    const wrapper = mount(<Review rating={review.rating} text={review.text} user={review.user} />);
    expect(wrapper.find('[data-id="user-rate"]').length).toBe(1);
  })
})