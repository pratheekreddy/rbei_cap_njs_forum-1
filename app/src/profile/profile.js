import React from "react";
import axios from 'axios';
import './profile.scss';

const Profile = (props) => {
    let update = () => {

        // email = document.getElementById('email').value
        // idno = document.getElementById('idno').value
        name = document.getElementById('name').value
        // ntid = document.getElementById('ntid').value
        dept = document.getElementById('dept').value
        username = document.getElementById('username').value
        if (!email || !idno || !name || !ntid || !dept) {
            return alert('please enter credientials')
        }

    }
    return (
        <div>
            <div className='updateprofile'>
                <label>E-mail </label>
                <input type='text' placeholder="krishnan.gautam@in.bosch.com" id="email" disabled></input>
                <label>Id number </label>
                <input type='text' placeholder="33378755" id="idno" disabled></input>
                <label>Full Name </label>
                <input type='text' placeholder="Enter your Full Name" id="name"></input>
                <label>NT-ID </label>
                <input type='text' placeholder="TKG1KOR" id="ntid" disabled></input>
                <label>Department </label>
                <input type='text' placeholder="Enter your Department" id="dept"></input>
                <label>Username </label>
                <input type='text' placeholder="Enter your Username" id="username"></input>
                <button className="rb-button rb-button--primary" onClick={update}>Update</button>
            </div>
        </div>
    )
}



export default withRouter(Profile);