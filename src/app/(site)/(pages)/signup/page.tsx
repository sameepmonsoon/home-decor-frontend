import { Metadata } from 'next';
import React from 'react';

import Signup from '@/components/Auth/Signup';
export const metadata: Metadata = {
  title: 'Signup Page | HomerDecor Your Online Furniture Destination',
  description: 'This is Signup Page for HomerDecor Template',
  // other metadata
};

const SignupPage = () => {
  return (
    <main>
      <Signup />
    </main>
  );
};

export default SignupPage;
