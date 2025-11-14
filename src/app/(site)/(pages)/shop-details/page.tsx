import { Metadata } from 'next';
import React from 'react';

import ShopDetails from '@/components/ShopDetails';

export const metadata: Metadata = {
  title: 'Shop Details Page | HomerDecor Nextjs E-commerce template',
  description: 'This is Shop Details Page for HomerDecor Template',
  // other metadata
};

const ShopDetailsPage = () => {
  return (
    <main>
      <ShopDetails />
    </main>
  );
};

export default ShopDetailsPage;
