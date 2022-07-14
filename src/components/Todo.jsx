import React from "react";
import Filter from "./Filter";
import {default as logo1} from "../icon-cross.svg"

function Todo({theme,setTodos,todos,input,setInput,item,complete,setComplete}) {


const removeTodo=function(){
  const newTodos=todos.filter(el=> el.id !==item.id)
  setTodos(newTodos)



}

const checkComplete=function(e){
  console.log(e)
  setTodos(todos.map(el=>{
    if(el.text===item.text){
        return {
            ...el,completed:!el.completed
        }
        
    }else{
      return el
    }
}
))

  console.log(e)
}







  return (
    
      
        <ul className={`todolists ${theme ? "todo_bg-active":"todo_bg-unactive"}`}>
          <li className="todolist_item">
            <div className="checkbox_container">
              <input type="checkbox"/>
              <label onClick={checkComplete} htmlFor="todo1"   className={item.completed ? "completed": ""}>{item.text}</label>
            </div>
            <img src={logo1} alt="remove-icon" onClick={removeTodo}/>
          </li>
        </ul>
        
        
        
        
        
     
  );
}

export default Todo;


