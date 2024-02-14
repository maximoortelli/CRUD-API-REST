/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';

const Add = () => {
    const [inputData, setInputData] = useState({name: "", email: ""});
    const navigat = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
    
        axios.post("http://localhost:3030/users", inputData)
          .then((res) => {
            alert("Data Added Successfully!");
            navigat("/");
          })
          .catch((error) => {
            console.error("Error adding data:", error);
          });
      }; 

return (
    <div className="d-flex w-100 justify-content-center align-items-center ">
      <div className="w-100 border bg-light p-5">
        <form onSubmit={handleSubmit}>
            <h1 className="mb-4">Sign Up</h1>
             <div>
                 <label className="mt-2" htmlFor="name">Name:</label>
                 <input type="text" name="name" className="form-control" 
                 onChange={e=>setInputData({...inputData, name: e.target.value})}/>
                 <br />
             </div>
             <div>
                 <label htmlFor="email">Email</label>
                 <input type="email" name="email" className="form-control" 
                 onChange={e=>setInputData({...inputData, email: e.target.value})}/>
                 <br />
             </div>
                 <button className="btn btn-info">Submit</button>
        </form>
      </div>
      
    </div>
  );
}

export default Add;
