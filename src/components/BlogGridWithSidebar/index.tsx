import Link from 'next/link';
import React from 'react';

import BlogItem from '../Blog/BlogItem';
import Categories from '../Blog/Categories';
import LatestPosts from '../Blog/LatestPosts';
import LatestProducts from '../Blog/LatestProducts';
import SearchForm from '../Blog/SearchForm';
import blogData from '../BlogGrid/blogData';
import Breadcrumb from '../Common/Breadcrumb';
import BlogPagination from '../Common/Pagination/BlogPagination';
import shopData from '../Shop/shopData';

const BlogGridWithSidebar = () => {
  const categories = [
    {
      name: 'Sofa',
      products: 2,
    },
    {
      name: 'Bedroom',
      products: 6,
    },
    {
      name: 'Dining & Kitchen',
      products: 30,
    },
    {
      name: 'Study',
      products: 23,
    },
    {
      name: 'Living',
      products: 10,
    },
    {
      name: 'Kids Room',
      products: 13,
    },
  ];

  return (
    <>
      <Breadcrumb title={'Blogs'} pages={['blogs']} />

      <section className='overflow-hidden py-20 bg-gray-2'>
        <div className='max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0'>
          <div className='flex flex-col lg:flex-row gap-7.5'>
            {/* <!-- blog grid --> */}
            <div className='lg:max-w-[770px] w-full'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-7.5'>
                {blogData.map((blog, key) => (
                  <BlogItem blog={blog} key={key} />
                ))}
              </div>

              {/* <!-- Blog Pagination Start --> */}
              <BlogPagination totalPages={10} />
              {/* <!-- Blog Pagination End --> */}
            </div>

            {/* <!-- blog sidebar --> */}
            <div className='lg:max-w-[370px] w-full'>
              {/* <!-- search box --> */}
              <SearchForm />

              {/* <!-- Recent Posts box --> */}
              <LatestPosts blogs={blogData} />

              {/* <!-- Latest Products box --> */}
              <LatestProducts products={shopData} />

              {/* <!-- Popular Category box --> */}
              <Categories categories={categories.slice(0, 3)} />

              {/* <!-- Tags box --> */}
              <div className='shadow-1 bg-white rounded-xl mt-7.5'>
                <div className='px-4 sm:px-6 py-4.5 border-b border-gray-3'>
                  <h2 className='font-medium text-lg text-dark'>Tags</h2>
                </div>

                <div className='p-4 sm:p-6'>
                  <div className='flex flex-wrap gap-3.5'>
                    {categories.map((category, index) => (
                      <Link
                        key={index}
                        href='#'
                        className='inline-flex items-center hover:text-white border border-gray-3 py-2 px-4 rounded-md ease-out duration-200 hover:bg-green hover:border-blue'
                      >
                        {category.name} <span className='ml-2 text-sm text-gray-500'>({category.products})</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGridWithSidebar;
