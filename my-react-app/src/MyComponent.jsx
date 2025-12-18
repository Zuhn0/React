
// // useEffect() = React Hook that tells React DO SOME CODE WHEN (Pick One):
// //               This Component re-renders
// //               This Component mounts
// //               The State of a value

// // useEffect(function,[dependencies])

// // 1. useEffect(() => {}) ............//Runs after every re-render
// // 2. useEffect(() => {},[])..........//Runs only on mount
// // 3. useEffect(() => {}, [value])....//Runs on mound + when value changes


// //USES
// // #1 Event Listeners
// // #2 Dom Manupulation
// // #3 Subscriptions (real - time Updates)
// // #4 Fetching Data from an API
// // #5 Clean up when a component unmounts


// import React,{useState,useEffect} from "react";

// function MyComponent(){

//     const [count, setCount] = useState(0);
//     const [color, setColor] = useState("green")

    
//     useEffect(() =>{
//         document.title = `Count: ${count} ${color}`;
//         return () => {
//             //Some cleanupCode
//         }
//     },[count] [color] ) ;  //every time Mycomponent function changes

// //    useEffect(() =>{
// //         document.title = `My component function`;
// //     },[] ) ; //one time 

// //    useEffect(() =>{
// //         document.title = `My component function`;
// //     },[count] ) ; //one time when 'count' changes

//     function addCount(){
//         setCount(c => c+1);
//     }

//     function SubtractCount(){
//         setCount(c => c-1);
//     }


//      function changeColor(){
//           setColor(c => c=== "green" ? "red" : "green");
//      }

//      return (
//         <>
//         <p style={{color:color}}>Count: {count}</p>
//         <button onClick={addCount}>Add</button>-
//         <button onClick={SubtractCount}>Subtract</button><br/>
//         <button onClick={changeColor}>Change Color</button>
//         </>
//      );
// }

// export default MyComponent










// useEffect(function, [dependencies])

import React, {useState, useEffect} from "react";

   function MyComponent() {

      const [width, setWidth] =useState(window.innerWidth);
      const [height, setHeight] =useState(window.innerHeight);

      
    //    //WITHOUT USE EFFECT
    //     window.addEventListener("resize",handleResize);
    //     console.log("Event listener added")

    //  USING EVENT LISTNER ONLY WHEN COMPONENT MOUNT

    useEffect(() => {
         window.addEventListener("resize",handleResize);
           console.log("Event listener added");

        return() => {
            window.removeEventListener("resize",handleResize);
           console.log("Event listener Removed");
        }
    }, []);

    useEffect(() => {
      document.title= `Size: ${width} x ${height}`;
    } , [width]  [height]);
     

      function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      }

       return (<>
               <p>Window Width: {width} px</p>
               <p>Window Height: {height} px</p>
       </>);
      }
      
export default MyComponent;