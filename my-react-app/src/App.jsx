//  useContext() =  React Hook that allows you to share values
//                  between multiple levels of components
//                  without passing props through each level

//  PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
// 4. <Child />
//   </MyContext.Provider>

//  CONSUMER COMPONENTS
// 1.import React, { useContext } from 'react'
//   import { MyContext } from './ComponentA';
//
import ComponentA from './ComponentA.jsx'
import './index.css'
import React from 'react';
function App(){

     return (
      <ComponentA/>
     );
}

export default App
