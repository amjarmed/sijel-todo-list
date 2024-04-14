import React, { useEffect, useRef, useState } from 'react';

function FocusInput() {
  /* 
  
  Using useEffect for DOM manipulation in React allows you to interact with the DOM after the component has rendered. This can be useful for tasks such as focusing on an input field, scrolling to a specific position, or updating elements based on component state or props.
  You can use useEffect to automatically focus on an input field when the component mounts or when certain conditions are met.
  */
  //Example 1: Focusing on an Input Field
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []); // Runs once on component mount

  //Example 2: Updating Element Styles
  const [isHovered, setIsHovered] = useState(false);

  //import { Chart } from 'chart.js';
  //You can use useEffect to initialize and work with third-party libraries that require access to DOM elements.

  return <input ref={inputRef} type='text' />;
}
