import { add } from './add';

export const total = (subTotal, shipping) => {
  return `$${add(subTotal, shipping)}`;
};
