import { Metadata } from 'next';
import React from 'react';

import BlogDetailsWithSidebar from '@/components/BlogDetailsWithSidebar';
export const metadata: Metadata = {
  title: 'Blog Details Page | HomerDecor Nextjs E-commerce template',
  description: 'This is Blog Details Page for HomerDecor Template',
  // other metadata
};

const BlogDetailsWithSidebarPage = () => {
  return (
    <main>
      <BlogDetailsWithSidebar />
    </main>
  );
};

export default BlogDetailsWithSidebarPage;
