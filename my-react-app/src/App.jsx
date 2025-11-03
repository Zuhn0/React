//React hook = Special function that allows functional components
//             to use React features without writing class components
//             (useState , useEffect, useContext,useReducer, useCallback, and more...)

//useState()=A React hook that allows the creation of a stateful variable
//           AND a setter function to update its value in the virtual DOM.
//           [name, setName]

// import MyComponent from "./MyComponent";


// function App(){

//      return (
//           <>
//           <MyComponent></MyComponent>
//           </>
//      )
// }

// export default App

import Counter from './Counter.jsx'

function App(){
     return (
          <>
          <Counter></Counter>
          </>
          
     )
}
export default App