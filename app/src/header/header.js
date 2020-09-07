import React , { useState } from 'react'
import {withRouter,Link} from 'react-router-dom'
import logo from './bosch_logo.jpg'
import './header.scss'

const header=(props)=> {
    const [signup, setSignup] = useState(false);
    //   console.log(props)
      if(props.location.pathname==='/'|| props.location.pathname==='/signup'){
          setSignup(true)
      }else{
          setSignup(false)
        }

      let welcome=(
        <h3>Welcome {localStorage.getItem('name')}</h3>
      )
      let nav=(
          <div className="signup">
          <Link className="h3" to={{pathname:'/'}}>Sign in</Link>
          <Link className="h3" to={{pathname:'/signup'}} >Sign up</Link>
          </div>
      )
    return (
        <header >
            <img src={logo} alt="Bosch Logo"></img>

            <h1>Forum Feed</h1>

            {signup? nav : welcome }
        </header>
    )
   
};

export default withRouter(header);