import React from 'react'
import "./Task.css"

function Task ({title,description,priority}){
  return (
    <>
    <div className='card mt-2 shadow'>
      <div className='card-body'>
      <p className='m-0'><strong>Title: </strong>{title}</p>
      <p className='m-0'>
        <strong>Description: </strong> {description}
        </p>
      <p className='m-0'><strong>Priority: </strong>{priority}</p>

      </div>

    

    </div>
    </>
  )
}

export default Task;
