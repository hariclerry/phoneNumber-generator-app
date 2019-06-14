import React from 'react';

const Error = ({ error, message }) => (
    <div>
      {
        error && <div>
          {message}
        </div>
      }
    </div>
);

export default Error;