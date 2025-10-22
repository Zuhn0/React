//props = read-only properties that are shared between components
//        A parent component can send data to a child component
//        <Component Key=value  />


import Student from './Student.jsx'
function App() {
   return(
      <>
     <Student name="Spongebob" age={30} isStudent={true}/>
     <Student name="Patrick" age={40} isStudent={false}/>
     <Student name="Squidward" age={50} isStudent={true}/>
     <Student />
      </>
   );
}

export default App
