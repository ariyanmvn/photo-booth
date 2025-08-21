import React, { useContext } from "react";
import { AuthContext } from "./Context/authcontext";

export default function App() {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="text-red-500">
      {user && user?.email ? `User exists ${user.displayName}` : "No user"}
      <div>
        {user?.email && <button className="text-red-500 font-bold cursor-pointer mt-7" onClick={logOut}>logout</button>}
      </div>
      App
    </div>
  );
}
