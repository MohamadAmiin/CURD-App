import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4040")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []); // Added an empty dependency array to avoid continuous re-fetching

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:4040/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="container bg-white rounded p-3">
        <div className="row">
          <div className="col-12 d-flex justify-content-between mb-3">
            <Link to="/create" className="btn btn-success">
              Add +
            </Link>
          </div>
          <div className="col-12">
            <table className="table table-responsive">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Job</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.job}</td>
                    <td>{user.age}</td>
                    <td>
                      <Link to={`/update/${user._id}`} className="btn btn-success me-2">
                        Update
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
