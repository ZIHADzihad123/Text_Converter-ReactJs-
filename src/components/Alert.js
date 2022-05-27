import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong style={{color: props.mode==='dark'?'white':'black'}}>{props.alert.Type} : {props.alert.msg} </strong>
    
    </div>
  )
}

export default Alert
