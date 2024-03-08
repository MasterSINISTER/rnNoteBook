import React from 'react'

function Alert(props) {
  return (
        <>
               <div class="alert alert-danger" role="alert">
                {props.message} 
            </div> 
        
        </>
  )
}

export default Alert
