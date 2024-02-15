/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3030/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    axios.put("http://localhost:3030/users/"+id, data)
    .then(res => {
        alert("Data update Succesfully");
        navigate("/")
    })
  }

  return (
    <div className="d-flex w-100 justify-content-center align-items-center">
      <div className="w-100 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Id:</label>
            <input
              type="text"
              disabled
              name="name"
              className="form-control"
              value={data.id}
            />
            <br />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <br />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <br />
          </div>
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
