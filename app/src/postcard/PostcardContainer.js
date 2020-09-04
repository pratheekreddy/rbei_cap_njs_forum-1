import React, { Component } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import Postcards from './postcards'

class PostcardContainer extends Component {
    constructor() {
        super();
        this.state = {
            session: []
        };
    }
    user = 'chathia chandran'
    reset = () => {
        let token = localStorage.getItem('token')
        axios.defaults.headers.common['Authorization'] = token;
        //to access environment variables.
        dotenv.config();
        const srv_api = process.env.CLOUD_SRV_API
        const post = axios.get(
            srv_api + "/agenda/sessions?$expand=TOPICS,FILES&$orderby=DATE%20desc"
        );
        post
            .then((result) => {
                this.setState({ session: result.data.value });
            })
            .catch((e) => {
                console.log(e)
                this.setState({ session: [] });
            });
    };

    componentDidMount() {
        this.reset();
    }
    render() {
        console.log(Object.keys(process.env))
        // console.log(props)
        return (
            <Postcards session={this.state.session} />
        )
    }
}

export default PostcardContainer;
