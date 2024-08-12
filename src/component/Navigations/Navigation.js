import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Outlets from '../Outlet/Outlet'
import MockApiCreate from '../../component/mockApiCreate'
import MockApiView from '../../component/mockApiView'
import TodoList from '../../component/TodoList'


function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element = {<Outlets /> }>
                    <Route path="/mock" element={<MockApiCreate/>} ></Route>
                    <Route path="/api-data" element={<MockApiView/>}></Route>
                    <Route path="/todo" element= {<TodoList />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation