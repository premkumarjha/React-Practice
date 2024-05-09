import React from "react";

import { Outlet, Routes, Route, Link } from "react-router-dom";
import User from "./user";
import UserList from "./userList";
const Users = () => {
  return (
    <>

    {/* descentdent routing ====> https://www.robinwieruch.de/react-router-descendant-routes/   */}
    
      <Routes>
        <Route index element={<UserList />} />
        <Route path=":userId" element={<User />} />
      </Routes>
      <Outlet />
    </>
  );
};

export default Users;
