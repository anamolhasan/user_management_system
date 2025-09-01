import React from "react";
// import Banner from './components/Banner'
import Table from "./components/Table";
import { useLoaderData } from "react-router";

const Home = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      {/* <Banner /> */}
    
        <Table  users={users} />
     
    </div>
  );
};

export default Home;
