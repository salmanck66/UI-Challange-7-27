import React from 'react';

const MainWindow = () => {
  return (
    <div className='flex-1 p-6 overflow-auto'>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold'>Performance Dashboard</h2>
      </div>

      <div className='mb-6'>
        <div className='bg-white p-4 shadow rounded-lg'>
          <h3 className='text-xl font-semibold'>Giant Slalom</h3>
          <div className='mt-4'>
            <img
              src='https://via.placeholder.com/600x300'
              alt='Performance over time'
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </div>

      <div className='mb-6'>
        <h3 className='text-xl font-semibold'>Performance Insights</h3>
        <div className='grid grid-cols-2 gap-4 mt-4'>
          <div className='bg-white p-4 shadow rounded-lg'>
            <img
              src='https://via.placeholder.com/300x200'
              alt='Average Time'
              className='w-full h-auto rounded-lg mb-4'
            />
            <div className='flex justify-between items-center'>
              <div>
                <h4 className='font-semibold'>Average Time</h4>
                <p className='text-sm'>Last 3 months: 125</p>
              </div>
              <button className='text-blue-500'>View</button>
            </div>
          </div>
          <div className='bg-white p-4 shadow rounded-lg'>
            <img
              src='https://via.placeholder.com/300x200'
              alt='Fastest Time'
              className='w-full h-auto rounded-lg mb-4'
            />
            <div className='flex justify-between items-center'>
              <div>
                <h4 className='font-semibold'>Fastest Time</h4>
                <p className='text-sm'>Last 3 months: 130</p>
              </div>
              <button className='text-blue-500'>View</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className='text-xl font-semibold'>Race Results</h3>
        <ul className='mt-4'>
          <li className='flex justify-between items-center py-2 border-b'>
            <span>World Cup - Italy</span>
            <span>138</span>
          </li>
          <li className='flex justify-between items-center py-2 border-b'>
            <span>World Cup - Austria</span>
            <span>132</span>
          </li>
          <li className='flex justify-between items-center py-2 border-b'>
            <span>World Cup - France</span>
            <span>134</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainWindow;
