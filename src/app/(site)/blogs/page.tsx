import { Metadata } from 'next';
import React from 'react';

import BlogGridWithSidebar from '@/components/BlogGridWithSidebar';
export const metadata: Metadata = {
  title: 'Blog Grid Page | HomerDecor Your Online Furniture Destination',
  description: 'This is Blog Grid Page for HomerDecor Template',
  // other metadata
};

const BlogGridWithSidebarPage = () => {
  return (
    <>
      <BlogGridWithSidebar />
    </>
  );
};

export default BlogGridWithSidebarPage;
