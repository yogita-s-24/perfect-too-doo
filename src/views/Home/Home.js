import React from "react";
import './Home.css'

function Home() {
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-2"> Perfect TO DO </h1>

        <div className="container d-flex justify-content-evenly mt-3">
          <div>
            <h5 className="text-center">Show List Here</h5>
            <div
              className="card shadow"
              style={{
                width: "25rem",
                height: "450px",
                border: "1px solid balck",
              }}></div>
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
                        <input type="text" placeholder="Enter List Title" className="form-control shadow py-4"/>
                        <input type="text" placeholder="Enter List Description" className="form-control py-4 shadow mt-5"/>
                        <input type="text" placeholder="Enter List Priority" className="form-control py-4 shadow mt-5"/>
                        <button className=" btn btn-dark px-5 d-block mt-5 mx-auto" >Add</button>
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
