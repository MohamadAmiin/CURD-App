import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [job , setJob] = useState();
  const [age, steAge] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4040/createUser", { name, email, job,age })
      .then((result) => {
        console.log(result);
        navigate('/')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mb-2">
            <label htmlFor="">Job</label>
            <input
              type="text"
              placeholder="Enter Title"
              className="form-control"
              onChange={(e) => setJob(e.target.value)}
            />
          </div>
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => steAge(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
