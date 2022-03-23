/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import App from '../app';

const { server } = new App();
const req = supertest(server);

describe('Test Example', () => {
  test('Base url', () => {
    req.get('/')
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe('use /add/:numbers with numbers separated by an underscore example /add/10_2');
      });
  });
  test('10 + 2', () => {
    req.get('/add/10_2')
      .expect(200)
      .then((response) => {
        expect(response.body.product).toBe(12);
      });
  });
  test('Failing url', () => {
    req.get('/add/10a_2')
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe('Number format error');
      });
  });
});
