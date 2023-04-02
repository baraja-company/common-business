import { MyComponent } from './index';

describe('MyComponent', () => {
  test('Can render', () => {
    expect(<MyComponent />).toEqual(<MyComponent />);
  });
});
