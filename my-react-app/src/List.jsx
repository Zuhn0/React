// function List(){
//    const fruits=["apple","orange","banana","coconut","pineapple"];

//    const listItems=fruits.map(fruit=><li>{fruit}</li>);
//    return (<ol>{listItems}</ol>);
// }
// import PropTypes from 'prop-types';
// function List(props){
   // const fruits=[{id:1,name:"apple",calories:95}
   //             ,{id:2,name:"orange",calories:45},
   //             {id:3,name:"banana" , calories:105},
   //             {id:4,name:"coconut",calories:150},
   //             {id:5,name:"pineapple", calories:35}];
   // fruits.sort((a,b)=>a.name.localeCompare(b.name)); // ALPHABETICAL
      // fruits.sort((a,b)=>b.name.localeCompare(a.name));  //REVERSE ALPHABETICAL
         // // fruits.sort((a,b)=>a.calories-b.calories);  //NUMERIC
         //          fruits.sort((a,b)=>b.calories-a.calories);  //REVERSE NUMERIC

         // HOW TO FILTER DATA ///

      // const lowCalFruits=fruits.filter(fruit=> fruit.calories<100);


      
   // const listItems=lowCalFruits.map(lowCalFruit=><li key={lowCalFruit.id}>
   //                                    {lowCalFruit.name}:&nbsp;
   //                                    <b>{lowCalFruit.calories}</b></li>);

//    const listItems=itemList.map(fruit=>   <li key={fruit.id}>
//                                           {fruit.name}:&nbsp;
//                                           <b>{fruit.calories}</b></li>);
//    return (<ol>{listItems}</ol>);
// }
// export default List

import './index.css'
function List(props){

      const category=props.category;
      const itemList=props.items;
     const listItems=itemList.map(item=>   <li key={item.id}>
                                          {item.name}:&nbsp;
                                          <b>{item.calories}</b></li>);
   return (
      <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
      </>  );
}
// List.protoTypes={
//    category: PropTypes.string,
//    items: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
//                                               name:PropTypes.string,
//                                              calories:PropTypes.number          
//    })),
// }
List.defaultProps={
   category:"category",
   item:[],
}

export default List