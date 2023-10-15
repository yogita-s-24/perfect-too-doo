import React from "react";
import "./Task.css";

function Task({ title, description, priority,deleteTask,obj}) {
  return (
    <>
      <div className="card mt-2 shadow">
        <div className="card-body card-container">
          <p className="m-0">
            <strong>Title: </strong>
            {title}
          </p>
          <p className="m-0">
            <strong>Description: </strong> {description}
          </p>
          <p className="m-0">
            <strong>Priority: </strong>
            {priority}
          </p>

<div className="edit-delete-task">
          <span className="bg-light shadow p-1  delete" style={{borderRadius:"50px"}} onClick={()=>{deleteTask(obj)}}>🗑️</span>
          <span className="bg-light shadow p-1  edit ms-1" style={{borderRadius:"50px"}}>✏️</span>
</div>

        </div>
      </div>
    </>
  );
}

export default Task;
