import { Metadata } from 'next';
import React from 'react';

import Checkout from '@/components/Checkout';
export const metadata: Metadata = {
  title: 'Checkout Page | HomerDecor Nextjs E-commerce template',
  description: 'This is Checkout Page for HomerDecor Template',
  // other metadata
};

const CheckoutPage = () => {
  return (
    <main>
      <Checkout />
    </main>
  );
};

export default CheckoutPage;
