import React,{useState,useEffect} from "react";
import "./App.css";
import Todo from "./components/Todo";
import Filter from "./components/Filter";

import {default as logo} from "./icon-moon.svg"
import logo1 from "./icon-sun.svg"

function App({item}) {

   const [theme,setTheme]=useState("true");
   const [complete,setComplete]=useState("true")

   const[input,setInput]=useState("")

   const[todos,setTodos]=useState([])
   const[currentStatus,setStatus]=useState("All")
   const[filter,setFilter]=useState([])
   const[activeTodoCounts,setActiveTodoCounts]=useState(0)


   useEffect(()=>{
     const uncompletedTodos=todos.filter(el=> el.completed===false)
     setActiveTodoCounts(uncompletedTodos.length)
     
   },[todos])





  const filterTodos=function(){
    switch(currentStatus){
    case "Completed":
      setFilter(todos.filter(el=>el.completed===true))
      break;
    
    
    case "Active":
      setFilter(todos.filter(el=>el.completed===false))
    break;
    
    default:
      setFilter(todos)
      break;
  }
}



//Save to Local Storage

const saveLocalTodos=()=>{
  if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]))
  }else{
      localStorage.setItem("todos",JSON.stringify(todos))
  }

}


const getLocalTodos=()=>{
  if(localStorage.getItem("todos")===null){
    localStorage.setItem("todos",JSON.stringify([]))
}else{
    localStorage.setItem("todos",JSON.stringify(todos))
}

}
 //use effect allows us to run a function everytime a piece of state changes 

useEffect(()=>{
getLocalTodos()
},[])





 useEffect(()=>{
  filterTodos()
  saveLocalTodos()
  
     },[currentStatus,todos])





     

   



   const handleInput =function (e){
    
    let input=e.target.value

    setInput(input)
   }

   const submitTodo=function(e){

    e.preventDefault()

    if(input.length!==0){
    setTodos([...todos,{text:input,completed:false, id:Math.random()*1000}])
    setInput("")
    }
   }

  
   

const handleTheme=function(e){
setTheme(!theme)
}





  return (
    <div className="App"   style={{backgroundColor:theme ? '#f2f2f2': "#393a4b"}}>
      <header className={theme?"active-theme":"inactive-theme"}>
        <div className="header_wrapper">
          <h1>TODO</h1>
          <img src={theme ? logo:logo1} alt="sun-icon" onClick={handleTheme}/>
        </div>
        <form>
          <input type="text" value={input}onChange={handleInput} className={`create_todo ${theme? "bg_class-active":"bg_class-inactive"}`} placeholder="Create a new todo..." />
          <button type="submit" className={`add_todo ${theme? "bg_class-active":"bg_class-inactive"}`} onClick={submitTodo}>Add</button>
        </form>
      </header>


      <main>
     <div className={`todolists_container ${theme ? "todo_bg-active":"todo_bg-unactive"}`}>
      {filter.map((item,i)=>(<Todo key={i} 
      theme={theme} 
      setTheme={setTheme} 
      todos={todos} 
      setTodos={setTodos} 
      input={input} 
      setInput={setInput} 
      item={item}
      complete={complete}
      setComplete={setComplete}
      filter={filter}/>))}




      <Filter theme={theme}
      setFilter={setFilter}
      setTheme={setTheme} 
      todos={todos} 
      setTodos={setTodos} 
      input={input} 
      setInput={setInput} 
      item={item}
      setStatus={setStatus}
      currentStatus={currentStatus}
      activeTodoCounts={activeTodoCounts}
      
      complete={complete}
      setComplete={setComplete}/>
      </div>
      {/* <div className={`filter_buttons_mobile ${theme ? "filter_mb-active":"filter_mb-unactive"}`}>
            <p>All</p>
            <p>Active</p>
            <p>Completed</p>
        </div> */}
  
      </main>
    </div>
  );
}

export default App;


