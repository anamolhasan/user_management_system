import React from "react";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link } from "react-router";

const NewUser = () => {

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const newUser = Object.fromEntries(formData.entries())
    console.log(newUser)
  }
  return (
    <div className="container mx-auto">
      <Link to={"/"} className="mt-32 mb-20 btn btn-primary">
        <MdOutlineKeyboardDoubleArrowLeft className="text-2xl" />
        All User
      </Link>
      <div className="text-center">
        <h1 className="text-5xl font-bold pb-5">New User</h1>
        <p className="text-xl text-gray-400">
          Use the below form to create a new account
        </p>
      </div>

      <form className="" onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-4xl mx-auto my-14 text-xl  border p-4 ">
          <label className="label font-bold">Name</label>
          <input
            type="name"
            name="name"
            className="input w-full  text-xl"
            placeholder="enter your name"
          />

          <label className="label mt-5 font-bold">Email</label>
          <input
            type="email"
            name="email"
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
              className="radio radio-accent"
              defaultChecked
            />
          </label>
          <label className="label  ">
            female
            <input
              type="radio"
              name="gender"
              className="radio radio-accent"
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
              className="radio radio-accent"
              defaultChecked
            />
          </label>
          <label className="label  ">
            Inactive
            <input
              type="radio"
              name="status"
              className="radio radio-accent"
            />
          </label>
         </div>

          <button type="submit" className=" btn btn-neutral mt-6 font-bold">Save</button>
        </fieldset>
      </form>
    </div>
  );
};

export default NewUser;
