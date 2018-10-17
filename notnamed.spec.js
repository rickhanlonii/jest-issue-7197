// my.test.js
describe('those tests', () => {
  test('will fail', () => {
    expect({ a: 5 }).toMatchSnapshot();
  });

  test('will also fail', () => {
    expect({ a: 4 }).toMatchSnapshot();
  });
});
