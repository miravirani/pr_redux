import React, { useContext, useEffect } from "react"
import { Outlet } from "react-router-dom"
import Header from '../Header/Header'
import { socket } from "../../Context/socket.js"

function Outlets() {

    // let myContextApi = useContext(socketContext)
    // console.log("socket connect  ==", myContextApi)

    // useEffect(() => {
    //     socket.emit("reduxconnected", {
    //         message: "hello word"
    //     })
    // }, [])

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Outlets