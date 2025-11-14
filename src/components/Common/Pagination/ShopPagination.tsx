'use client';

import { useQueryState } from 'nuqs';
import React from 'react';

const ShopPagination = ({ totalPages = 10 }) => {
  const [page, setPage] = useQueryState('page', {
    defaultValue: 1,
    parse: v => parseInt(v) || 1,
    serialize: v => String(v),
  });

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className='flex justify-center mt-15'>
      <div className='bg-white shadow-1 rounded-md p-2'>
        <ul className='flex items-center gap-1'>
          {/* Prev Button */}
          <li>
            <button
              onClick={handlePrev}
              aria-label='Previous page'
              type='button'
              disabled={page === 1}
              className={`flex items-center justify-center w-8 h-9 rounded-[3px] duration-200 
              ${page === 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-green hover:text-white'}`}
            >
              <svg
                className='fill-current'
                width='18'
                height='18'
                viewBox='0 0 18 18'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12.1782 16.1156C12.0095 16.1156 11.8407 16.0594 11.7282 15.9187L5.37197 9.45C5.11885 9.19687 5.11885 8.80312 5.37197 8.55L11.7282 2.08125C11.9813 1.82812 12.3751 1.82812 12.6282 2.08125C12.8813 2.33437 12.8813 2.72812 12.6282 2.98125L6.72197 9L12.6563 15.0187C12.9095 15.2719 12.9095 15.6656 12.6563 15.9187C12.4876 16.0312 12.347 16.1156 12.1782 16.1156Z' />
              </svg>
            </button>
          </li>

          {/* Page Numbers */}
          {pages.map(p => (
            <li key={p}>
              <button
                onClick={() => setPage(p)}
                className={`flex py-1.5 px-3.5 rounded-[3px] duration-200 
                ${p === page ? 'bg-green text-white' : 'hover:bg-green hover:text-white'}`}
              >
                {p}
              </button>
            </li>
          ))}

          {/* Next Button */}
          <li>
            <button
              onClick={handleNext}
              aria-label='Next page'
              type='button'
              disabled={page === totalPages}
              className={`flex items-center justify-center w-8 h-9 rounded-[3px] duration-200 
              ${page === totalPages ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-green hover:text-white'}`}
            >
              <svg
                className='fill-current'
                width='18'
                height='18'
                viewBox='0 0 18 18'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M5.82197 16.1156C5.65322 16.1156 5.5126 16.0594 5.37197 15.9469C5.11885 15.6937 5.11885 15.3 5.37197 15.0469L11.2782 9L5.37197 2.98125C5.11885 2.72812 5.11885 2.33437 5.37197 2.08125C5.6251 1.82812 6.01885 1.82812 6.27197 2.08125L12.6282 8.55C12.8813 8.80312 12.8813 9.19687 12.6282 9.45L6.27197 15.9187C6.15947 16.0312 5.99072 16.1156 5.82197 16.1156Z' />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShopPagination;
