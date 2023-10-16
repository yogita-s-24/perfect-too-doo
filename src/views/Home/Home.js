import React, { useEffect, useState } from "react";
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
  const addTaskIntoList = () => {
    // Generate a random ID for the new task
    const randomId = Math.floor(Math.random() * 1000);
  
    // Create an object to represent the new task
    const obj = {
      id: randomId,
      title: title,          // Assuming 'title' is defined elsewhere in your code
      description: description, // Assuming 'description' is defined elsewhere in your code
      priority: priority      // Assuming 'priority' is defined elsewhere in your code
    }
  
    
    // Create a new array ('newTaskList') that includes the new task object
    const newTaskList = [...taskList, obj];

    // Update state with the new list of tasks
    setTaskList(newTaskList);
  
    // Clear the input fields or reset the corresponding state variables
    setTitle('');          // Assuming 'setTitle' is used to update the title state
    setDescription('');     // Assuming 'setDescription' is used to update the description state
    setPriority('');       // Assuming 'setPriority' is used to update the priority state
  
    // Optionally, save the updated task list to local storage
    saveToLocalStorage(newTaskList);
  }
  


//delete task from list using obj
// const deleteTask = (obj) =>{
//  const index = taskList.indexOf(obj) //find the index of the task to be deleted
//  const tempArray = taskList; //create a referance to the original array
//  tempArray.splice(index,1); //remove the task from tempArray
//  setTaskList([...tempArray]); // Update state with the tempArray
  
// }

//delete task from list using id
const deleteTask = (id) => {
  let index; // Declare a variable to store the index of the task to be deleted
  
  // Loop through the taskList to find the index of the task with the matching id
  taskList.forEach((task, i) => {
    if (task.id === id) {
      index = i; // Set the 'index' variable to the index of the task to be deleted
    }
  });

  const tempArray = taskList; // Create a reference to the original 'taskList' array

  // Remove the task from the 'tempArray' using the 'splice' method
  tempArray.splice(index, 1);

  // Update the state with a new array created by spreading the 'tempArray'
  setTaskList([...tempArray]);


  saveToLocalStorage(tempArray); //Call the 'saveToLocalStorage()' function with 'tempArray' to updated task to delete from the Local Storage.
}


//Task Save to Local Storage
const saveToLocalStorage = (()=>{
  localStorage.setItem('perfect',JSON.stringify(taskList));
})


//load task from local storage
useEffect(() => {
 const list = JSON.parse(localStorage.getItem('perfect'));
  setTaskList(list);
}, []);



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
                  const { title, description, priority, id} = taskItem;
                  return (
                    <Task
                      key={i}
                      title={title}
                      description={description}
                      priority={priority}
                      deleteTask={deleteTask}
                      // object={taskItem}
                      id={id}
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
