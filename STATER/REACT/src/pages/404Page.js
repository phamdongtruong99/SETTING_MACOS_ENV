import React from 'react';
import NotFoundIcon from 'assets/images/404-error.svg';

function NotFoundPage() {
  return (
    <div className="absolute h-screen inset-0 w-screen flex flex-center bg-primary text-white min-h-500">
      <div className="p-20">
        <img src={NotFoundIcon} alt="Not Found" className="w-full" />
        <div className="my-20">
          <p className="text-80 leading-none text-center">404</p>
          <p className="text-30 leading-none text-center">Page not found</p>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
