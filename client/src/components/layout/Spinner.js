import React from 'react';
import spinner from './spinner.gif';

function Spinner(props) {
  return (
    <React.Fragment>
      <img
        src={spinner}
        alt="loading"
        style={{ width: '500px', margin: 'auto', display: 'block' }}
      />
    </React.Fragment>
  );
}

export default Spinner;
