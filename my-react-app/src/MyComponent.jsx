import React, {useState} from 'react';

function MyComponent(){
    const [car, setCar] = useState({year: 2024,
                                    make: "Nissan",
                                    model: "GTR"});
    
    function handleYearChange(event){
        setCar(c=> ({...c, year: event.target.value}));
        //...car is a spread  operator which || year: 2024,make: "Nissan",model: "GTR" , year:newlyset ||    it updates the year in that object
    }
        function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}));
    }
        function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}));
    }

    return (
        <div>
            <p>Your Favorite Car is : {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange} /> <br/>
            <input type="text" value={car.make} onChange={handleMakeChange} /> <br/>
            <input type="text" value={car.model} onChange={handleModelChange}/> <br/>
        </div>
    );

}
export default MyComponent