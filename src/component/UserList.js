import React, { useContext, useState, useEffect } from 'react';
import { socketContext } from '../Context/socket';
import "../css/UserList.css"

function UserList() {
    const socket = useContext(socketContext);
    const [search, setSearch] = useState('');
    const [users, setUsers] = useState([]);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        socket.on('searched_value', (doc) => {
            setUsers(doc.data);
        });

        socket.on('all_user_get', (doc) => {
            setUserData(doc.data);
        });

        socket.emit('register', {
            userID: localStorage.getItem('userID'),
            id1: localStorage.getItem('userID')
        });

    }, [socket]);

    const userSearch = () => {
        socket.emit('get_users', { search });
    };

    const selectUser = async (userID) => {
        localStorage.setItem('receiverID', userID);

        const personalUserDetails = userData.filter(user => user.userID === userID);
        console.log('personal user details', personalUserDetails);

        document.getElementById('chatScreenUserName').innerText = personalUserDetails[0]?.name ?? '';

        await allChatLoading();
    };

    const allChatLoading = () => {
        console.log("all chat is loading");
        socket.emit("get_all_chat", {
            senderID: localStorage.getItem("userID"),
            receiverID: localStorage.getItem("receiverID")
        });
    };

    return (
        <div className="user-list">

            <div style={{ display: "flex", width: "100%" }}>
                <input
                    type="text"
                    list="usersname"
                    name="userSearchInput"
                    id="userSearchInput"
                    placeholder='Search User'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={userSearch} style={{ width: "33%" }}>submit</button>
            </div>

            <datalist id="usersname">
                {users.map(user => (
                    <option key={user.userID} value={user.userID}>{user.name}</option>
                ))}
            </datalist>

            <div id="userlist">
                {users.map(user => (
                    <div key={user.userID} className="div2" onClick={() => selectUser(user.userID)}>
                        <i className="fa fa-user-circle" style={{ fontSize: '43px' }} aria-hidden="true"></i>
                        <p className="p2">{user.name}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default UserList;
