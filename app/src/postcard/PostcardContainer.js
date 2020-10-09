import React, { Component } from 'react';
import axios from 'axios';
import Postcards from './postcards'
import Loading from '../loading/loading'

class PostcardContainer extends Component {
    intervalID;
    constructor() {
        super();
        this.state = {
            session: [],
            loading:false
        };
    }
    reset = () => {
        let t = localStorage.getItem('token')
        if(!t){
            return this.props.history.push({pathname:'/login'});
        }
        let email_local = localStorage.getItem('email')
        let token='requester='+email_local+';rbei_access_token='+t
        axios.defaults.headers.common['Authorization'] = token;
        this.setState({loading:false})
        const post = axios.get(
            "/api/agenda/sessions?$expand=TOPICS,FILES&$orderby=DATE%20desc"
        );
        post
            .then((result) => {
                this.setState({ session: result.data.value ,loading:true});
                // this.intervalID = setTimeout(this.reset.bind(this), 5000);
            })
            .catch((e) => {
                alert('Please login again')
                console.log(e)
                this.setState({loading:true})
                this.props.history.push({pathname:'/login'})
            });
    };

    componentDidMount() {
        this.reset();
    }

    // componentWillUnmount() {
    //     clearTimeout(this.intervalID);
    // }

    render() {
        return (
            this.state.loading?<Postcards session={this.state.session} no_of_sessions = {this.state.session.length} /> : <Loading/>
        )
    }
}

export default PostcardContainer;
