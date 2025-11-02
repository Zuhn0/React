function Button(){
    // let count=0;
    // const handleClick=(name)=> {
    //  if(count<3){
    //     count++;
    //     console.log(`${name} You clicked me ${count} times`);
    //  }
    //  else{
    //             console.log(`${name} Stop clicking Me!`);
    //  }
    // };
      const handleClick=(e) => e.target.textContent="Ouch!";   //e=event
    // const handleClick2=(name)=> console.log(`${name} Stop clicking me`);
    //    return(<button onClick={()=>handleClick("Bro")}>Click me</button>);
           return(<button onClick={(e)=>handleClick(e)}>Click me</button>);
//    return(<button onClick={()=>handleClick2("Bro")}>Click me</button>);
}
export default Button