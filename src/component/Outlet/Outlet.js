import React from "react"
import { Outlet } from "react-router-dom"
import ImgbbHeader from "../Header/ImgbbHeader"
import Header from "../Header/Header.js"



function Outlets(){
    return(
        <>
            <Header/>
            <Outlet />
            {/* <ImgbbHeader/>
            <Outlet/> */}
        </>
    )
}

export default Outlets