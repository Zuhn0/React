// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//             When you want a component to "remember" some information
//             but you don't want that information to trigger new renders.

//            1. Accessing/Interacting with DOM Elements
//            2. Handling Focus, Animations, and Transitions
//            3. Managing Timers and Intervals

import React, {useState, useEffect, useRef} from 'react';


function MyComponent(){
     
     const inputref1 = useRef(null);
     const inputref2= useRef(null);
     const inputref3 = useRef(null);


     useEffect(() => {
         console.log("COMPONENT RENDERED");

     });
      
      function handleClick1(){
            inputref1.current.focus();
            inputref1.current.style.backgroundColor = "yellow";
            inputref2.current.style.backgroundColor = "";
            inputref3.current.style.backgroundColor = "";
      }
            function handleClick2(){
            inputref2.current.focus();
            inputref2.current.style.backgroundColor = "yellow";
            inputref1.current.style.backgroundColor = "";
            inputref3.current.style.backgroundColor = "";
      }
            function handleClick3(){
            inputref3.current.focus();
            inputref3.current.style.backgroundColor = "yellow";
            inputref1.current.style.backgroundColor = "";
            inputref2.current.style.backgroundColor = "";
      }

      return(
      <div>
            <button onClick={handleClick1}>
             Click Me 1!
            </button>
            <input ref={inputref1}/>

                        <button onClick={handleClick2}>
             Click Me 2!
            </button>
            <input ref={inputref2}/>

                        <button onClick={handleClick3}>
             Click Me 3!
            </button>
            <input ref={inputref3}/>
            </div>
      );
}

export default MyComponent;