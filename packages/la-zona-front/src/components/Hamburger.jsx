import React from 'react';

export function Hamburger(props) {
  return (
    <div className='hamburger' onClick={props.onClick}>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
    </div>
  );
}
