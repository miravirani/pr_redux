import React, { useContext, useEffect } from "react"
import { Outlet } from "react-router-dom"
import ChatHeader from "../Header/ChatHeader.js"
import UserList from "../UserList.js"
import ChatScreen from "../ChatScreen.js"
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
            <div style={{display: "flex", height: "100vh"}}>
                {/* <ChatHeader />
                <UserList />
                <ChatScreen /> */}
                <Outlet />
            </div>
        </>
    )
}

export default Outlets