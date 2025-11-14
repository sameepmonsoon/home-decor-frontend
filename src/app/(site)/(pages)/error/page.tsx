import { Metadata } from 'next';
import React from 'react';

import Error from '@/components/Error';
export const metadata: Metadata = {
  title: 'Error Page | HomerDecor Your Online Furniture Destination',
  description: 'This is Error Page for HomerDecor Template',
  // other metadata
};

const ErrorPage = () => {
  return (
    <main>
      <Error />
    </main>
  );
};

export default ErrorPage;
