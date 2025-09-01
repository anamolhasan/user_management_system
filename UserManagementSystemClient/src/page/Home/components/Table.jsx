import React from "react";
import { FaPencilAlt, FaUser } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-router";

const Table = ({ users }) => {
  // console.log(users)
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
            {users.map((user, index) => (
              <tr key={user._id} className="hover:bg-gray-600 hover:text-white">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.status}</td>
                <td className="flex justify-center gap-3 items-center">
                  <Link to={`/update-user/${user._id}`} className=" p-2 rounded-md shadow-lg/70  ">
                    <FaPencilAlt />
                  </Link>
                  <Link to={``} className=" p-2 rounded-md shadow-lg/70 ">
                    <ImCross />
                  </Link>
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
