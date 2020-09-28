import React ,{useState}from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom'

// import Post from './post'
import './postagenda.scss'
import Loading from '../loading/loading'

const PostAgenda = (props) => {
    let t = localStorage.getItem('token')
    let email_local = localStorage.getItem('email')
    let token='requester='+email_local+';rbei_access_token='+t
    axios.defaults.headers.common['Authorization'] = token;

    const [fields, setFields] = useState([{ USER_EMAIL: null , SUB_TOPIC:null }]);
    const [loading,setLoading]=useState(false)
    let handleChangeEmail=(i, event)=> {
        const values = [...fields];
        values[i].USER_EMAIL = event.target.value;
        setFields(values);
      }

    let handleChangeTopic=(i, event)=> {
        const values = [...fields];
        values[i].SUB_TOPIC = event.target.value;
        setFields(values);
      }

    let handleAdd=()=> {
        const values = [...fields];
        values.push({ USER_EMAIL: null , SUB_TOPIC:null });
        setFields(values);
      }

    let handleRemove=(i)=> {
        const values = [...fields];
        values.splice(i, 1);
        setFields(values);
      }
    
    let load=(<Loading/>)

    let post=()=>{
        let title=document.getElementById('title').value
        let date=document.getElementById('date').value
        let desc=document.getElementById('description').value
        console.log(title,date,desc,fields)
        setLoading(true)
        // setFields([{ USER_EMAIL: null , SUB_TOPIC:null }])
        axios.post('/api/agenda/sessions',{
            DATE:date,
            TITLE:title,
            DESC:desc,
            TOPICS:fields
        })
        .then((result)=>{
          setLoading(false)
            alert('session uploaded sucessfully')
        })
        .catch(e=>{
            console.log(e)
            setLoading(false)
            alert('something went wrong')
        })
    }
    
    return(<div className='agenda'>
        <label>Title  </label>
        <input type='text' id='title'></input>
        <label>  Date  </label>
        <input type='date' id='date'></input><br></br><br></br>
        <label className='desclabel'>Description  </label>
        <textarea id='description' rows = "5" cols = "70" className='desc' placeholder='Some description about the session'></textarea>
        <i className='boschicon-bosch-ic-add' onClick={handleAdd}></i>
        {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <label>Presentor Email  </label>
            <input type='text' onChange={e => handleChangeEmail(idx, e)}></input>
            <label>     Topic    </label>
            <input type='text' onChange={e => handleChangeTopic(idx, e)} ></input>
            <button type="button" onClick={() => handleRemove(idx)}>
              X
            </button>
          </div>
        );
      })}
      <div className='submit'>
      <button type='button' className="rb-button rb-button--primary" onClick={post}>Submit</button>
      </div>
      {loading? load:null}
    </div>)
}

export default withRouter(PostAgenda);