// src/components/Loading.js
import React from 'react';
import Typical from 'react-typical';

const Loading = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1>
        <Typical
          loop={1}
          wrapper="p"
          steps={[
            "Welcome to Coding Club",
            2000,
            "Loading...",
            1000,
          ]}
        />
      </h1>
    </div>
  );
};

export default Loading;