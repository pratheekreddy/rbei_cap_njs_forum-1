import React, { Component } from 'react';
import axios from 'axios';
import Postcards from './postcards'

class PostcardContainer extends Component {
    constructor() {
        super();
        this.state = {
            session: []
        };
    }
    reset = () => {
        let t = localStorage.getItem('token')
        let email_local = localStorage.getItem('email')
        let token='requester='+email_local+';rbei_access_token='+t
        axios.defaults.headers.common['Authorization'] = token;
        const post = axios.get(
            "/api/agenda/sessions?$expand=TOPICS,FILES&$orderby=DATE%20desc"
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
        // console.log(Object.keys(process.env))
        // console.log(props)
        return (
            <Postcards session={this.state.session} />
        )
    }
}

export default PostcardContainer;
