import Vasern from 'vasern';

import { OrderModel } from './schemas';
export default new Vasern({
    schemas: [OrderModel],
    version: 3
});