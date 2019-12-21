import React, { useRef, useEffect, FunctionComponent } from 'react';
import { createPortal } from 'react-dom';

// REASEARCH HOW TO TRAP FOCUS IN MODALS -> BEST PRACTICE
const Modal: FunctionComponent = ({ children }) => {
  // when modals are created, markup is created and when modal is destroyed, it must be unrendered
  // -> else memory will leak if I keep recreating modals -> gotta act like a garbage collector
  const elRef = useRef(document.createElement('div'));

  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    if (!modalRoot) {
      return;
    }
    modalRoot.appendChild(elRef.current);

    // if we return a function, it will be the cleanup function -> feature of useEffect
    // hence, this function only ran when modalRoot is closed
    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []); // EMPTY array so that useEffect runs only once to avoid bugs

  // wrap it around div for styling
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
