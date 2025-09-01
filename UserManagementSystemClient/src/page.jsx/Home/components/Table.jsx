import React from "react";
import { FaPencilAlt, FaUser } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Table = () => {
  return (
    <div className="container mx-auto x">
        <button className="mt-32 mb-20 btn btn-primary">
            New User
            <FaUser />
            </button>
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
            {/* row 1 */}
            <tr className="hover:bg-gray-600">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>anamolhasan.job@gmail.com</td>
              <td>Male</td>
              <td>Inactive</td>
              <td className="flex justify-center gap-3 items-center">
                <button className="bg-gray-700 p-2 rounded-md shadow-lg ">
                    <FaPencilAlt />
                </button>
                <button className="bg-gray-700 p-2 rounded-md shadow-lg ">
                    <ImCross />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
