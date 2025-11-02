import List from './List.jsx'
function App() {
        const fruits=[{id:1,name:"apple",calories:95}
                     ,{id:2,name:"orange",calories:45},
                      {id:3,name:"banana" , calories:105},
                      {id:4,name:"coconut",calories:150},
                      {id:5,name:"pineapple", calories:35}];

     const vegetables=[{id:6,name:"potato",calories:45}
                     ,{id:7,name:"celery",calories:45},
                      {id:8,name:"carrot" , calories:105},
                      {id:9,name:"corn",calories:150},
                      {id:10,name:"broccoli", calories:35}];
     return (<>
     {fruits.length>0 ? <List items={fruits} category="Fruits"></List> : null}
     
     {vegetables.length>0 ? <List items={vegetables} category="Vegetables"></List> : null}
     </>)
     //THE ABOVE LINE IS COATING FOR "React.createElement(List, { items: fruits, category: "Fruits" })

}

export default App
