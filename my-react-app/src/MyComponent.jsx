//Updater function =A function passes as an argument to setState() usually
//                  ex. setYear(arrow function)
//                  Allow for safe updates based on the previous state
//                  Used with multiple State updates and asynchronous functions
//                  Good practise to use updater function//

//Problem without it imagine //
///      function increment(){
//                setCount(year+1);  
//                setCount(year+1);
//                setCount(year+1);                
//           }
//after hitting increment year still remains 0 to 1 or 1 increase only as count is not updated
// and it treats each setCount as (0+1),(0+1),(0+1);

import React, {useState} from 'react';

function MyComponent(){

    const[count, setCount]=useState(0);

    function increment(){
       //ACTS AS QUEUE NOW//
        setCount(c => c+1);
        setCount(c => c+1);
        setCount(c => c+1);
    };
    
    function decrement(){
       //ACTS AS QUEUE NOW//
        setCount(c => c-1);
        setCount(c => c-1);
        setCount(c => c-1);
    };
}