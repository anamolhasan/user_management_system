import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const { _id, name, email, gender, status } = useLoaderData();
  // const { _id, name, email, gender: g, status: s } = useLoaderData();
  // console.log(initialUser)
  const navigate = useNavigate()

  // const [gender, setGender] = useState(g);
  // const [status, setStatus] = useState(s);

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updateUser = Object.fromEntries(formData.entries());
    console.log(updateUser);

    fetch(`${import.meta.env.VITE_API_URL}/users/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Update successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/')
        }
      });
  };

  return (
    <div>
      <div className="container mx-auto">
        <Link to={"/"} className="mt-10  btn btn-primary">
          <MdOutlineKeyboardDoubleArrowLeft className="text-2xl" />
          All User
        </Link>
        <div className="text-center">
          <h1 className="text-5xl font-bold pb-5">Update User</h1>
          <p className="text-xl text-gray-400">
            Use the below form to create a update account
          </p>
        </div>

        <div>
          <form
            onSubmit={handleUpdate}
            className="fieldset bg-base-200 border-base-300 rounded-box w-4xl mx-auto my-14 text-xl  border p-4 "
          >
            <label className="label font-bold">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="input w-full  text-xl"
              placeholder="enter your name"
            />

            <label className="label mt-5 font-bold">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={email}
              className="input w-full  text-xl"
              placeholder="enter your email"
            />

            <div className="flex items-center mt-5 gap-8 ">
              <p className="font-bold">Gender</p>
              <label className="label  ">
                Male
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="radio radio-accent"
                  defaultChecked={gender === "Male"}
                />
              </label>
              <label className="label  ">
                female
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="radio radio-accent"
                  defaultChecked={gender === "Female"}
                />
              </label>
            </div>

            <div className="flex items-center mt-5 gap-8 ">
              <p className="font-bold">Status</p>
              <label className="label  ">
                Active
                <input
                  type="radio"
                  name="status"
                  value={"Active"}
                  className="radio radio-accent"
                  defaultChecked={status === "Active"}
                />
              </label>
              <label className="label  ">
                Inactive
                <input
                  type="radio"
                  name="status"
                  value={"Inactive"}
                  className="radio radio-accent"
                  defaultChecked={status === "Inactive"}
                />
              </label>
            </div>

            {/* Gender */}
            {/* <div className="flex items-center mt-5 gap-8">
              <p className="font-bold">Gender</p>
              <label className="label cursor-pointer">
                <span className="mr-2">Male</span>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="radio radio-accent"
                />
              </label>
              <label className="label cursor-pointer">
                <span className="mr-2">Female</span>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="radio radio-accent"
                />
              </label>
            </div> */}

            {/* Status */}
            {/* <div className="flex items-center mt-5 gap-8">
              <p className="font-bold">Status</p>
              <label className="label cursor-pointer">
                <span className="mr-2">Active</span>
                <input
                  type="radio"
                  name="status"
                  value="Active"
                  checked={status === "Active"}
                  onChange={(e) => setStatus(e.target.value)}
                  className="radio radio-accent"
                />
              </label>
              <label className="label cursor-pointer">
                <span className="mr-2">Inactive</span>
                <input
                  type="radio"
                  name="status"
                  value="Inactive"
                  checked={status === "Inactive"}
                  onChange={(e) => setStatus(e.target.value)}
                  className="radio radio-accent"
                />
              </label>
            </div> */}

            <button type="submit" className="btn btn-neutral mt-6 font-bold">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
