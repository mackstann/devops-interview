import express from 'express';
import { addNumbers } from './functions';

const routes = express.Router();

routes.get('/', (req, res) => res.json({ message: 'use /add/:numbers with numbers separated by an underscore example /add/10_2' }));

routes.get('/add/:numbers', (req, res) => {
  const { params } = req;
  const { numbers = '0_0' } = params;
  const pattern = /^\d+_\d+$/;
  if (pattern.test(numbers)) {
    return res.json({ product: addNumbers(numbers) });
  }
  return res.json({ message: 'Number format error' });
});

export default routes;
