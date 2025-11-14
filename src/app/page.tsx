import { Metadata } from 'next';

import Home from '@/components/Home';

export const metadata: Metadata = {
  title: 'HomerDecor | Nextjs E-commerce template',
  description: 'This is Home for HomerDecor Template',
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
