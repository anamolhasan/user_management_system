import React, { useState } from "react";
import { FaPencilAlt, FaUser } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Table = ({ users }) => {
  const [allUser, setAllUser] = useState(users);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your User name has been deleted.",
                icon: "success",
              });

              // delete user management system update ui
              const userManagementSystem = allUser.filter(user => user._id !== id)
              setAllUser(userManagementSystem)
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto mb-20">
      <Link to={"/new-user"} className="mt-10 mb-10 btn btn-primary">
        New User
        <FaUser />
      </Link>
      <div className="overflow-x-auto">
        <table className="table container mx-auto text-center">
          {/* head */}
          <thead className="bg-gray-700 text-white">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {allUser.map((user, index) => (
              <tr key={user._id} className="hover:bg-gray-600 hover:text-white">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.status}</td>
                <td className="flex justify-center gap-3 items-center">
                  <Link
                    to={`/update-user/${user._id}`}
                    className=" p-2 rounded-md shadow-lg/70  "
                  >
                    <FaPencilAlt />
                  </Link>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className=" p-2 rounded-md shadow-lg/70 "
                  >
                    <ImCross />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
