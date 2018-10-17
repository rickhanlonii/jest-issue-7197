// my.test.js
describe('those tests', () => {
  test('will fail', () => {
    expect({ a: 4 }).toMatchSnapshot('one');
  });

  test('will also fail', () => {
    expect({ a: 3 }).toMatchSnapshot('two');
  });
});
