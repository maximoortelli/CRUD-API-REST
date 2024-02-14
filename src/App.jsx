/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

import "./App.css";

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3030/users").then((res) => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, []);
  return (
    <div className="container mt- ">
      <div className="text-center btn-lg mb-4">
        <Link to="/create" className="btn btn-primary btn-md">
          Sign Up 
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>
                <Link to={`/update/${d.id}`} className="btn btn-sm btn-success">
                  Update
                </Link>
                <button onClick={e=>handleSubmit(d.id)} className="btn btn-sm ms-3 btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  function handleSubmit(id){
    const conf = window.confirm("Do you want to delete?");
    if(conf){
      axios.delete("http://localhost:3030/users/"+id)
      .then(res=>{
        alert("Record has deleted");
        navigate("/")
      }).catch(err=>console.log(err))
    }
  }
}

export default App;
