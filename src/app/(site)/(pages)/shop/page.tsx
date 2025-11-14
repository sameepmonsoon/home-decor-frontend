import { Metadata } from 'next';
import React from 'react';

import ShopWithSidebar from '@/components/ShopWithSidebar';
export const metadata: Metadata = {
  title: 'Shop Page | HomerDecor Nextjs E-commerce template',
  description: 'This is Shop Page for HomerDecor Template',
  // other metadata
};

const ShopWithSidebarPage = () => {
  return (
    <main>
      <ShopWithSidebar />
    </main>
  );
};

export default ShopWithSidebarPage;
