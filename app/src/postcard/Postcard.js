import React, { useState } from "react";
import axios from 'axios'
import ReactTooltip from "react-tooltip";
import fileDownload from 'js-file-download';

import "./postcard.scss";


const PostCard = (props, state) => {
    let t = localStorage.getItem('token')
    let email_local = localStorage.getItem('email')
    let token='requester='+email_local+';rbei_access_token='+t
    axios.defaults.headers.common['Authorization'] = token;  
  const [showResources, setShowResources] = useState(false);
  let topics = [];
  let presento = [];
  let resorc = [];
  for (let i = 0; i < props.topics.length; i++) {
    topics.push(props.topics[i].SUB_TOPIC)
    presento.push(props.topics[i].USER_EMAIL)
  }
  for (let j = 0; j < props.files.length; j++) {
    let t=props.files[j].FILE_NAME.split('-')
    resorc.push([t[t.length-1], props.files[j].FILE_NAME])
  }
  let presentors = [...new Set(presento)]
  topics=[...new Set(topics)]
  let str = topics.toString()

  let list = (
    <div>
      {presentors.map((presontor, i) => {
        let ref="mailto:"+presontor
        return <li key={i}><a style={{color:"#868686"}} href={ref}>{presontor}</a></li>
      })}
    </div>
  )

  let filedown=(fileNam)=>{
    axios.get('node/file/download?filename='+fileNam)
    .then((result)=>{
      console.log(result)
      fileDownload(result.data, 'FOTA.docx');
    })
  }

  let download = (
    <ul className="downloads">
    {/*TODO: add heading*/}
      <h5 style={{"margin-left": "10px"}}>Attachments</h5>
      
      {resorc.map((down, i) => {
        
        const tempName = down[0].split('.');
        return <li key={i}><p target="_blank" rel="noopener noreferrer" onClick={filedown(down[1])} ><span>{tempName[1]}</span>{tempName[0]}</p></li>
      })}
    </ul>
  )
  let file
  let formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('files', file);
    formData.append('session_id', props.session_id)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    axios.post("/node/file/upload", formData, config)
      .then((response) => {
        // console.log(response)
        if(response.status===200){
        alert(response.data.status);}
      }).catch((error) => {
      });
  }

  let onChange = (e) => {
    file = e.target.files[0];
    formSubmit(e)
  }

  let sendEmail=()=>{
      axios.get('/node/publishagenda?session_id='+props.session_id)
  }

  let emailicon=(
    <div className="admin-notify">
        <i data-tip data-for="emailTip" className="boschicon-bosch-ic-mail" onClick={sendEmail}></i>
          <ReactTooltip id="emailTip" place="top" effect="solid">
                Email Subscribers
          </ReactTooltip>
      </div>
  )

  return (
    <div className="card">
      <div className="head">
        <label>{props.index + 1}</label>
        <strong>{str}</strong>
        <span><b>{props.date}</b></span>
      </div>
      <div className="desc">
        {props.description}
      </div>
      <div className="presenters">
        <h5>Presented by</h5>
        {list}
      </div>

      <div className='upload'>
        <form onSubmit={formSubmit}>
          <i  className="boschicon-bosch-ic-cloud-upload"></i>
          <ReactTooltip id="uploadTip" place="top" effect="solid">
                Upload Attachments
          </ReactTooltip>
          <input data-tip data-for="uploadTip" type="file" name="files" onChange={onChange} />
          <div className="clear"></div>
        </form>
      </div>
      {resorc && resorc.length ?
        <div className="resources">
          <i data-tip data-for="attachmentsTip" className="boschicon-bosch-ic-book" onClick={() => {
            let newVal = showResources ? false : true;
            setShowResources(newVal);
          }}></i>
          <ReactTooltip id="attachmentsTip" place="top" effect="solid">
                View Attachments
          </ReactTooltip>
        </div> : null}
      <div >{showResources ? download : null}</div>


      <div>{(new Date(props.date) > new Date() ) &&localStorage.getItem('type')==='A' ? emailicon: null}</div>
      <div className="clear"></div>
    </div>
  );
};

export default PostCard;
