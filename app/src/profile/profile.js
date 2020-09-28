import React, { Component} from "react";
import axios from 'axios';
import './profile.scss';
import { withRouter } from 'react-router-dom';
import ProfileInfo from './profileInfo'
import Loading from '../loading/loading'

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            profileinfomation: [],
            loading:false
        };
    }

    getProfileInfo=()=>{
    let t = localStorage.getItem('token')
    let email=localStorage.getItem('email')
    let email_local = localStorage.getItem('email')
    let token='requester='+email_local+';rbei_access_token='+t
    axios.defaults.headers.common['Authorization'] = token;
        this.setState({loading:false})
    axios.get("/api/profile/readprofile(email='"+email+"')/Set").then((result)=>{
        this.setState({profileinfomation : result.data.value[0],
        loading:true});
    })
    .catch((e)=>{
        console.log(e)
        this.setState({loading:true})
        })
    }
    
    componentDidMount() {
        this.getProfileInfo()
      };

      render() {
    return (
        
        this.state.loading ?<ProfileInfo EMAIL={this.state.profileinfomation.EMAIL_ID} IDNO={this.state.profileinfomation.IDNO} NAME={this.state.profileinfomation.NAME} NTID={this.state.profileinfomation.NTID} DEPT={this.state.profileinfomation.DEPT} USERNAME={this.state.profileinfomation.USERNAME}/> : <Loading/>
    );
      }
    
}

export default withRouter(Profile);