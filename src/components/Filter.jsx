import React,{useEffect} from "react";

function Filter({setTodos,todos,filter,setFilter,setStatus,currentStatus,activeTodoCounts}){

   
let activeTodo
    const showActive=(e)=>{
        setStatus(e.target.innerHTML)
        
    
    }

    
    const showAll=(e)=>{
        setStatus("All")
        // setFilter(todos)
       
    }

const handleCompleted=(e)=>{
setStatus(e.target.innerHTML)

}

const clearCompleted=()=>{
    const notCompleted=todos.filter(el=> el.completed!==true)
    setTodos(notCompleted)
}



    






return(
    <section className="filter_container">
        <p>{activeTodoCounts} items left</p>
        <div className="filter_buttons_desktop">
            <p onClick={showAll}>All</p>
            <p onClick={showActive}>Active</p>
            <p onClick={handleCompleted}>Completed</p>
        </div>
        <p onClick={clearCompleted} className="clear_completed">Clear Completed</p>
    </section>
)
}

export default Filter