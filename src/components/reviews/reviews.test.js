import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';
import Review from './review';
import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;

describe('Review', ()=>{
  it('should render', ()=>{
    const wrapper = mount(<Reviews reviews={reviews}/>);
    expect(wrapper.find(Review).length).toBe(reviews.length);
  });
  it('should render diff review', ()=>{
    const wrapper = mount(<Reviews reviews={reviews}/>);
    expect(wrapper.find('h4').first().text()).toBe("Antony");
    expect(wrapper.find('h4').last().text()).toBe("Sam");
  });
  it('should render 5 stars', () =>{
    const wrapper = mount(<Reviews reviews={[reviews[0]]}/>);
    expect(wrapper.find('svg.star').length).toBe(5);
  });
  it('should be empty review', () =>{
    const wrapper = mount(<Reviews reviews={[]}/>);
    expect(wrapper.find('h4').length).toBe(0);
    expect(wrapper.find('svg.star').length).toBe(0);
  })
})