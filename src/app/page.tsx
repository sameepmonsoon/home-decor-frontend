import { Metadata } from 'next';

import Home from '@/components/Home';

export const metadata: Metadata = {
  title: 'HomerDecor | Your Online Furniture Destination',
  description: 'Welcome to HomeDecor — Where Style Meets Comfort',
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
