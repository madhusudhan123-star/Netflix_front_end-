import React, { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Cards from './Cards';

const List_cards = ({ title, data, type }) => {
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollBy({
      top: 0,
      left: scrollOffset,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (data && data.length > 0) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <div className='relative w-full h-full mt-15 mb-10 bg-black'>
      <h1 className='text-5xl ml-10 text-white font-extrabold'>{title}</h1>
      <div className='mt-8'>
        <button 
          onClick={() => scroll(-300)} 
          className='absolute h-80 w-12 mt-4 left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-2 rounded-full z-10'>
          <FaChevronLeft size={24} />
        </button>
        <div ref={scrollRef} className='flex gap-2 overflow-x-scroll scrollbar-hide w-full h-full'>
          {isLoading ? (
            <h1 className='text-5xl text-white font-extrabold'>Loading...</h1>
          ) : (
            data.map((item, i) => (
              <div key={i}><Cards data={item} type={type} /></div>
            ))
          )}
        </div>
        <button 
          onClick={() => scroll(300)} 
          className='absolute h-80 w-12 mt-4 right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-2 rounded-full z-10'>
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default List_cards;