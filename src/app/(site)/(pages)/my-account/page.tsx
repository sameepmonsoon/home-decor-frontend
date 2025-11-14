import { Metadata } from 'next';
import React from 'react';

import MyAccount from '@/components/MyAccount';
export const metadata: Metadata = {
  title: 'My Account | HomerDecor Your Online Furniture Destination',
  description: 'This is My Account page for HomerDecor Template',
  // other metadata
};

const MyAccountPage = () => {
  return (
    <main>
      <MyAccount />
    </main>
  );
};

export default MyAccountPage;
