import React from 'react';
import { Toaster } from 'react-hot-toast';

const ToasterContainer = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      //   containerClassName=""
      containerStyle={{
        top: 80,
      }}
      toastOptions={{
        // Define default options
        className: '',
        duration: 3000,
        style: {
          background: 'white',
          color: 'black',
          padding: '5px 10px 5px 10px',
        },
        // Default options for specific types
        success: {
          duration: 4000,
          theme: {
            primary: 'green',
            secondary: 'black',
          },
        },
      }}
    />
  );
};

export default ToasterContainer;
