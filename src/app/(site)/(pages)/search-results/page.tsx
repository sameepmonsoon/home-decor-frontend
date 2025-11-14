import { Metadata } from 'next';
import React from 'react';

import ShopWithoutSidebar from '@/components/ShopWithoutSidebar';
export const metadata: Metadata = {
  title: 'Shop Page | HomerDecor Nextjs E-commerce template',
  description: 'This is Shop Page for HomerDecor Template',
  // other metadata
};

const ShopWithoutSidebarPage = () => {
  return (
    <main>
      <ShopWithoutSidebar />
    </main>
  );
};

export default ShopWithoutSidebarPage;
