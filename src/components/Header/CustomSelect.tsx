import React, { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

const CustomSelect = ({ options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Close on outside click or scroll
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleScroll, true);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className='relative w-[200px] custom-select'>
      <div
        onClick={toggleDropdown}
        className={cn(
          'select-selected whitespace-nowrap cursor-pointer border rounded-md px-3 py-2 bg-white rounded-r-none',
          isOpen && 'select-arrow-active border-blue-500'
        )}
      >
        {selectedOption?.label}
      </div>

      {isOpen && (
        <div className={cn('absolute z-10 mt-1 w-full min-w-46 border rounded-md bg-white shadow-md select-items')}>
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className={cn(
                'px-3 py-2 cursor-pointer hover:bg-gray-100 select-item',
                selectedOption?.value === option?.value && 'bg-gray-200'
              )}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
