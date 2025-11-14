import { Metadata } from 'next';
import React from 'react';

import BlogGrid from '@/components/BlogGrid';
export const metadata: Metadata = {
  title: 'Blog Grid Page | HomerDecor Nextjs E-commerce template',
  description: 'This is Blog Grid Page for HomerDecor Template',
  // other metadata
};

const BlogGridPage = () => {
  return (
    <main>
      <BlogGrid />
    </main>
  );
};

export default BlogGridPage;
