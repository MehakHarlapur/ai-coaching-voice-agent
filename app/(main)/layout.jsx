'use client';

import React from 'react';

function DashboardLayout({ children }) {
  return (
    <div className='p-10 mt-14 md:px-20 lg:px-32 xl:px-56 2xl:px-72'>
      {children}
    </div>
  );
}

export default DashboardLayout;