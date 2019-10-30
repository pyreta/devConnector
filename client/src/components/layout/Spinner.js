import React from 'react';
import spinner from './spinner.gif';

function Spinner(props) {
  return (
    <img src={spinner} alt="loading" style={{ width: '500px', margin: 'auto', display: 'block' }} />
  );
}

export default Spinner;
