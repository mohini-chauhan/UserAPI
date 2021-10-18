import './App.css';
import Card from './Components/Card';
import {useState,useEffect}  from "react";
var API={
  base:'https://jsonplaceholder.typicode.com/users'
}

function App() {
  
  
function objtoarr(){
  var card=[]
  for(let i=0;i<data.length;i++){
    card.push(data[i])
  }
  return card
}

const [data,setData]=useState({})


  function userData(){
  
    fetch(API.base)
    .then(response=>response.json())
    .then(result=>{
      setData(result)

    })
  }
  useEffect(() => {   
  
    userData()
    
    },[]);
    

  var cards=objtoarr().map((c)=>{
    return(
      <Card text={c}/>
    )
  })
  return (
    <div className="App">
      <h1>User Profiles</h1>
      <div className="app-container">{cards}</div>
    </div>
  );
}

export default App;
