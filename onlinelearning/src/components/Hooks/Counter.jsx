import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='bg-gray-50 item justify-center flex flex-col items-center h-screen'>
      <h1>You clicked {count} times</h1>
      <div className='flex gap-4 mt-4'>
        <button className='bg-black text-white' onClick={() => setCount(count + 1)}>+</button>
        <button className='bg-black text-white ' onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};

export default Counter;
