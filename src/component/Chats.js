import React from "react";
import ChatHeader from "./Header/ChatHeader";
import UserList from "./UserList";
import ChatScreen from "./ChatScreen";
import "../css/Chats.css"

const Chats = () => {
    return (
        <>
            <div className="chat-app">
                <div className="sidebar">
                    <ChatHeader />
                    <UserList />
                </div>
                <div className="main-content">
                    <ChatScreen />
                </div>
            </div>
        </>
    )
}

export default Chats
