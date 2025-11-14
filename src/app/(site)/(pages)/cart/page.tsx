import { Metadata } from 'next';
import React from 'react';

import Cart from '@/components/Cart';
export const metadata: Metadata = {
  title: 'Cart Page | HomerDecor Nextjs E-commerce template',
  description: 'This is Cart Page for HomerDecor Template',
  // other metadata
};

const CartPage = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;
