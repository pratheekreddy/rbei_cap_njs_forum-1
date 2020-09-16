import React /*, { useState }*/ from 'react'
import {withRouter,Link} from 'react-router-dom'
import logo from './bosch_logo.jpg'
import './header.scss'

const header=(props)=> {
    // const [signup, setSignup] = useState(false);
    //   console.log(props)
    let signup=true
      if(props.location.pathname==='/login'|| props.location.pathname==='/signup'){
          signup=true
      }else{
          signup=false
        }

      let welcome=(
        <h3>Welcome {localStorage.getItem('name')}</h3>
      )
      let nav=(
          <div className="signup">
          <Link className="h3" to={{pathname:'/login'}}>Sign in</Link>
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