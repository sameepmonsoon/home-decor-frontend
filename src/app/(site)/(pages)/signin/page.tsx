import { Metadata } from 'next';
import React from 'react';

import Signin from '@/components/Auth/Signin';
export const metadata: Metadata = {
  title: 'Signin Page | HomerDecor Nextjs E-commerce template',
  description: 'This is Signin Page for HomerDecor Template',
  // other metadata
};

const SigninPage = () => {
  return (
    <main>
      <Signin />
    </main>
  );
};

export default SigninPage;
