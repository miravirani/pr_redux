import React from "react"
import CreateTodo from "./CreateTodo"
import ViewTodo from "./ViewTodo"

function TodoList(){
    return(
        <>
            <CreateTodo />
            <ViewTodo />        
        </>
    )
}

export default TodoList