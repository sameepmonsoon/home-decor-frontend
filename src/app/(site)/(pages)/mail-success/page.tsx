import { Metadata } from 'next';
import React from 'react';

import MailSuccess from '@/components/MailSuccess';
export const metadata: Metadata = {
  title: 'Mail Success Page | HomerDecor Nextjs E-commerce template',
  description: 'This is Mail Success Page for HomerDecor Template',
  // other metadata
};

const MailSuccessPage = () => {
  return (
    <main>
      <MailSuccess />
    </main>
  );
};

export default MailSuccessPage;
