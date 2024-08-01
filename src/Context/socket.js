import { createContext } from "react"
import {connect} from "socket.io-client"

const socket = connect("ws://localhost:7000")
const socketContext = createContext()

export {socket, socketContext}
