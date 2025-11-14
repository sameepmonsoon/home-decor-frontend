import { Metadata } from 'next';
import React from 'react';

import BlogDetails from '@/components/BlogDetails';
export const metadata: Metadata = {
  title: 'Blog Details Page | HomerDecor Your Online Furniture Destination',
  description: 'This is Blog Details Page for HomerDecor Template',
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <main>
      <BlogDetails />
    </main>
  );
};

export default BlogDetailsPage;
