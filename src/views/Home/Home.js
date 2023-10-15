import React, { useState } from "react";
import "./Home.css";
import Task from "./../../components/Task/Task";

function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [taskList, setTaskList] = useState([
    {
      title: "To Do App",
      description: "Perfect all Concepts of TODOAPP",
      priority: "High",
    }
 
  ]);

  // This Arrow function for add Task In the List
const addTaskIntoList = () =>{
  const randomId = Math.floor(Math.random() * 1000);
  const obj ={
    id : randomId ,
    title : title,
    description : description,
    priority : priority
  }
  setTaskList([...taskList,obj]);
  
  setTitle('');
  setDescription('');
  setPriority('');
}


  return (
    <>
      <div className="container">
        <h1 className="text-center mt-2"> Perfect TO DO </h1>

        <div className="container d-flex justify-content-evenly flex-wrap mt-3">
          <div>
            <h5 className="text-center">Show List Here</h5>
            <div
              className="card shadow"
              style={{
                width: "25rem",
                height: "450px",
                border: "1px solid balck",
              }}>
              <div className="card-body scroller-container">
                {taskList.map((taskItem, i) => {
                  const { title, description, priority } = taskItem;
                  return (
                    <Task
                      key={i}
                      title={title}
                      description={description}
                      priority={priority}
                    />
                  );
                })}
               
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-center"> Add List Here</h5>
            <div
              className="card shadow"
              style={{
                width: "25rem",
                height: "450px",
                border: "1px solid balck",
              }}>
              <div className="card-body">
                <form>
                  <div className="container">
                    <input
                      type="text"
                      placeholder="Enter List Title"
                      className="form-control shadow py-4"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                        console.log(e.target.value);
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Enter List Description"
                      className="form-control py-4 shadow mt-5"
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                        console.log(e.target.value);
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Enter List Priority"
                      className="form-control py-4 shadow mt-5"
                      value={priority}
                      onChange={(e) => {
                        setPriority(e.target.value);
                        console.log(e.target.value);
                      }}
                    />
                    <button className=" btn btn-dark px-5 d-block mt-5 mx-auto" type="button" onClick={addTaskIntoList}>
                      Add 
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
