import React from "react"
import "../../css/mockApi.css"
import { Link } from "react-router-dom"

function Header(){
    return(
        <div className="head">
            <Link to={"/todo"} >Todo List</Link>
            <Link to={"/mock"}> Mock Api</Link>
        </div>
    )
}

export default Header;