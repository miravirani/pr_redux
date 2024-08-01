import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Outlets from "../Outlet/Outlet"
// import ImgbbCreate from "../ImgbbCreate"
// import ImgbbView from "../ImgbbView"
import MockApiCreate from "../mockApiCreate"
import MockApiView from "../mockApiView"
import  TodoList from "../TodoList"

function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element = {<Outlets /> }>
                    {/* <Route path="/" element= {<ImgbbCreate/>}/>
                    <Route index path="/view" element={<ImgbbView/>}/> */}
                    <Route path="/mock" element={<MockApiCreate/>} ></Route>
                    <Route path="/api-data" element={<MockApiView/>}></Route>
                    <Route path="/todo" element= {<TodoList />}></Route>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default Navigation