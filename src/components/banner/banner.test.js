import { mount, render, shallow } from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Banner from '../banner';
import Enzyme from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

beforeAll(() => {
  console.log('Начинаем тестирование...');
});

afterAll(() => {
  console.log("Тестирование полностью завершено...");
});

beforeEach(() => {
  console.log("Начинается тест. Запуск перед каждым тестом..")
});

afterEach(() => {
  console.log("Выполняем после каждого теста.!!!")
});

describe.skip('А эти тесты пропустим', () => {
  console.log('111')
})

describe('Тестирование компонента <Banner />', (done) => {
  it('Test 1', () => {
    return fetch().then(result => {
      expect(result).toContain('lemon');
      done();
    })
  })
});
