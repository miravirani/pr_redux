import React, { useContext, useEffect, useState } from 'react'
import { socketContext } from '../Context/socket'
import '../css/ChatScreen.css'

function ChatScreen() {
    const socket = useContext(socketContext)
    const [chatData, setChatData] = useState([])
    const [message, setMessage] = useState('')

    useEffect(() => {
        const receiverID = localStorage.getItem('receiverID')

        if (receiverID) {
            socket.emit('get_all_chat', {
                senderID: localStorage.getItem('userID'),
                receiverID: receiverID
            });
        }

        const handleChatData = (doc) => {
            setChatData(doc.chatData)
        };

        const handleCaughtMessage = (doc) => {
            setChatData(prevChatData => {
                if (!prevChatData.find(chat => chat.messageID === doc.messageID)) {
                    return [...prevChatData, doc]
                }
                return prevChatData
            });
        };

        socket.on('chat-data', handleChatData)
        socket.on('caught_message', handleCaughtMessage)
        socket.on('catch_all_chat', handleChatData)

        return () => {
            socket.off('chat-data', handleChatData)
            socket.off('caught_message', handleCaughtMessage)
            socket.off('catch_all_chat', handleChatData)
        };
    }, [socket])

    const dropMessage = () => {
        const receiverID = localStorage.getItem('receiverID')

        const newMessage = {
            senderID: localStorage.getItem('userID'),
            receiverID: receiverID,
            message: message,
            messageID: new Date().getTime()
        };

        socket.emit('drop_message', newMessage)

        setChatData(prevChatData => [...prevChatData, newMessage])

        setMessage('')
    }

    return (
        <div className="chat-screen">
            <div className="div3">
                <div className="div3a">
                    <i className="fa fa-user-circle" aria-hidden="true" style={{ fontSize: '43px' }}></i>
                    <p className="p2" id="chatScreenUserName">papa😘</p>
                </div>

                <div className="menu">
                    <i className="fa fa-video-camera" aria-hidden="true"></i>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <li className="services"><i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                        <ul className="dropdown">
                            <li>View contact</li>
                            <li>Media, links, and docs</li>
                            <li>Search</li>
                            <li>Mute notifications</li>
                            <li>Disappearing messages</li>
                            <li>Wallpaper</li>
                            <li>More</li>
                        </ul>
                    </li>
                </div>
            </div>

            <div className="div4" style={{ height: '80vh' }}>
                <div id="chatDiv" className="chatDiv">
                    <div className="message-container">
                        {chatData.map((chat, index) => (
                            <div key={index} className={`message ${chat.senderID === localStorage.getItem('userID') ? 'right-chat' : 'left-chat'}`}>
                                {chat.message}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="div5">
                <div id="chtInputDiv" style={{ width: '100%', display: 'flex' }}>
                    <input type="text" name="dropMessageInput" id="dropMessageInput" style={{ width: '80%' }} placeholder='Type Message' value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button onClick={dropMessage} style={{ width: '18%' }}>submit</button>
                </div>
            </div>

        </div>
    )
}

export default ChatScreen;
