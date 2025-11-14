import { Metadata } from 'next';
import React from 'react';

import { Wishlist } from '@/components/Wishlist';

export const metadata: Metadata = {
  title: 'Wishlist Page | HomerDecor Your Online Furniture Destination',
  description: 'This is Wishlist Page for HomerDecor Template',
  // other metadata
};

const WishlistPage = () => {
  return (
    <main>
      <Wishlist />
    </main>
  );
};

export default WishlistPage;
