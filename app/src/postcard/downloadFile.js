import React from 'react'
import fileDownload from 'js-file-download'
import axios from 'axios'

const download=(props)=> {

    let down=props.down
    const tempName = down[0].split('.');
    console.log(down)
    let filedown=()=>{
        axios.get('/node/file/download?filename='+down[1])
            .then((result)=>{
            console.log(result)
            fileDownload(result.data, down[1]);
    })
    }
    return(
        
         <li><p target="_blank" rel="noopener noreferrer" onClick={filedown}><span>{tempName[1]}</span>{tempName[0]}</p></li>
    )
}

export default download