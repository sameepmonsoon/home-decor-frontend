import { Metadata } from 'next';

import Contact from '@/components/Contact';
export const metadata: Metadata = {
  title: 'Contact Page | HomerDecor Nextjs E-commerce template',
  description: 'This is Contact Page for HomerDecor Template',
  // other metadata
};

const ContactPage = () => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;
