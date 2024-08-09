import { createContext } from "react"
import {connect} from "socket.io-client"

// const socket = connect("ws://192.168.1.20:7000")
const socket = connect("ws://localhost:7000")
const socketContext = createContext()

export {socket, socketContext}
