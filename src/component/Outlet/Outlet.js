import React, { useContext, useEffect } from "react"
import { Outlet } from "react-router-dom"
import ImgbbHeader from "../Header/ImgbbHeader"
import Header from "../Header/Header.js"
import { socket, socketContext } from "../../Context/socket.js"



function Outlets() {

    let myContextApi = useContext(socketContext)
    console.log("socket connect  ==", myContextApi)

    useEffect(() => {
        socket.emit("reduxconnected", {
            message: "hello word"
        })
    }, [])

    // socket.emit("reduxconnected", {
    //     message: "hello word"
    // })

    return (
        <>
            <Header />
            <Outlet />
            {/* <ImgbbHeader/>
            <Outlet/> */}
        </>
    )
}

export default Outlets