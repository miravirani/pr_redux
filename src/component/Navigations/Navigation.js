import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Chats from "../Chats"
import LoginChatPage from "../LoginChatPage"

function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginChatPage/>}/>
                <Route path="/chat" element={<Chats/>}/>


                {/* <Route path="" element = {<Outlets /> }>
                    <Route path="/mock" element={<MockApiCreate/>} ></Route>
                    <Route path="/api-data" element={<MockApiView/>}></Route>
                    <Route path="/todo" element= {<TodoList />}></Route>
                </Route> */}

            </Routes>
        </BrowserRouter>
    )
}

export default Navigation