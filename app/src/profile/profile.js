import React from "react";
import axios from 'axios';
import './profile.scss';
import { withRouter } from 'react-router-dom';

const Profile = (props) => {
    let update = () => {

       let name = document.getElementById('name').value;
       let dept = document.getElementById('dept').value;
       let username = document.getElementById('username').value;

    }

    let enableElement = (e) => {
        console.log(e);
        document.getElementById("username").disabled = false;
    }
    return (
        <div>
            <div className='updateprofile'>
                <label>E-mail </label>
                <input type='text' placeholder="krishnan.gautam@in.bosch.com" id="email" disabled></input>
                <label>Id number </label>
                <input type='text' placeholder="33378755" id="idno" disabled></input>
                <label>Full Name </label>
                <input type='text' placeholder="Gautam Krishnan" id="name" disabled></input>
                <i className="boschicon-bosch-ic-edit" onClick={enableElement}></i>
                <label>NT-ID </label>
                <input type='text' placeholder="TKG1KOR" id="ntid" disabled></input>
                <label>Department </label>
                <input type='text' placeholder="RBEI/BLS5" id="dept" disabled></input>
                <i className="boschicon-bosch-ic-edit" onClick={enableElement}></i>
                <label>Username </label>
                <input type='text' placeholder="Gomzi" id="username" disabled></input>
                <i className="boschicon-bosch-ic-edit" onClick={enableElement}></i>
                <button className="rb-button rb-button--primary" onClick={update}>Update</button>
            </div>
        </div>
    );
}



export default withRouter(Profile);