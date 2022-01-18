import React from 'react';
import classes from './MyButton.module.css';

function MyButton( { children, ...props } ) { 
  return (
    <button { ...props } className={ props.className ? classes.myBtn + ' ' + props.className : classes.myBtn }>
      { children }
    </button>
  );
}

export default MyButton;