import React, { useState } from "react";
import axios from 'axios';

import Loading from '../loading/loading'
import './signup.scss'

const Signup = (props) => {
    const [vuserName, setUsername] = useState();
    let email, idno, name, ntid, dept, username;
    const [loading, setloading] = useState(false)

    // console.log(props)
    let register = () => {

        email = document.getElementById('email').value
        idno = document.getElementById('idno').value
        name = document.getElementById('name').value
        ntid = document.getElementById('ntid').value
        dept = document.getElementById('dept').value
        username = document.getElementById('username').value
        if (!email || !name || !dept) {
            console.log('User Information :- ');
            console.log("Email ", email, ", length :- ", email.length);
            console.log("Full Name ", name, ", length :- ", name.length);
            console.log("Department ", dept, ", length :- ", dept.length);
            return alert('Please fill in the mandatory fields');
        }
        if (!email.endsWith('@in.bosch.com') || email.split('@')[0].length === 0) {
            return alert("Please enter a valid bosch email id.")
        }
        if (!dept.startsWith('RBEI/')) {
            return alert('Please fill in the department as shown in the example');
        }
        setloading(true)
        const post = axios.post('/node/user/signup', {
            email, idno, name, ntid, dept, username
        });
        post.then((result) => {
            console.log(result);
            setloading(false);
            alert(result.data.msg);
            if (result.status === 201) {
                props.history.push({ pathname: '/login' });
            }

        }).catch((e) => {
            setloading(false);
            alert(e.response.data.msg);
            console.log(e.response.data.msg);
        })
    }

    let checkUsername = () => {

        username = document.getElementById('username').value
        if (username.length !== 0) {
            setUsername('loading');
            axios.get('/node/user/valid?username=' + username)
                .then((result) => {
                    console.log(result.data.valid)
                    if (result.data.valid === true) {
                        // alert('valid username');
                        setUsername('valid')
                    }
                    else {
                        // alert('username already exist');
                        setUsername('invalid')
                    }
                })
                .catch(e => {
                    alert(e)
                    setUsername('invalid')
                })
        }
    }

    let load = (<Loading />)

    return (
        <div className='login'>
            <p >Sign up (only Bosch employees)</p>
            <div>
                <label className="required">E-mail</label>
                <input type='text' placeholder="Enter your Email" id="email"></input>
                <label>Username </label>
                <input className={vuserName} type='text' onBlur={checkUsername} placeholder="Enter your Username" id="username"></input>
                <label className="required">Full Name</label>
                <input type='text' placeholder="Enter your Full Name" id="name"></input>
                <label className="required">Department</label>
                <input type='text' placeholder="Eg. RBEI/BSL1" id="dept"></input>
                <label>Employee Id</label>
                <input type='text' placeholder="Enter your Employee Id" id="idno"></input>
                <label>NT-ID</label>
                <input type='text' placeholder="Enter your NT ID" id="ntid"></input>
                <button className="rb-button rb-button--primary" onClick={register}>Signup</button>
            </div>
            {loading ? load : null}
            <div className="clear"></div>
        </div>
    )
}

export default Signup;