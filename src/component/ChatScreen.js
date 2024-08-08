import React, { useContext, useEffect, useState } from 'react';
import { socketContext } from '../Context/socket';
import "../css/ChatScreen.css"

function ChatScreen() {
    const socket = useContext(socketContext);
    const [chatData, setChatData] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        socket.on('chat-data', (doc) => {
            setChatData(doc.chatData);
        });

        socket.on('caught_message', (doc) => {
            setChatData(prevChatData => [...prevChatData, doc]);
        });

        socket.on('catch_all_chat', (doc) => {
            setChatData(doc.chatData);
        });

    }, [socket]);

    const dropMessage = () => {
        socket.emit('drop_message', {
            senderID: localStorage.getItem('userID'),
            receiverID: localStorage.getItem('receiverID'),
            message: message
        });

        setChatData(prevChatData => [...prevChatData, {
            senderID: localStorage.getItem('userID'),
            message: message
        }]);

        setMessage('');
    };

    return (
        <>
            <div className="chat-screen">
                <div className="div3">
                    <div className="div3a">
                        <i className="fa fa-user-circle" aria-hidden="true" style={{ fontSize: '43px' }}></i>
                        <p className="p2" id="chatScreenUserName">Papa</p>
                    </div>
                    <div className="menu">
                        <i className="fa fa-video-camera" aria-hidden="true"></i>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <li className="services"><i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <ul className="dropdown">
                                <li>View contact</li>
                                <li>Media, links, and docs</li>
                                <li><a href="#">Search</a></li>
                                <li><a href="#">Mute notifications</a></li>
                                <li><a href="#">Disappearing messages</a></li>
                                <li><a href="#">Wallpaper</a></li>
                                <li><a href="#">More</a></li>
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
                    <div id="chtInputDiv" style={{ width: '100%' }}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <input type="text"
                                name="dropMessageInput"
                                id="dropMessageInput" style={{ width: '80%' }}
                                placeholder='Type message'
                                value={message} onChange={(e) => setMessage(e.target.value)} />
                            <button onClick={dropMessage} style={{ width: '15%' }}>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChatScreen;
