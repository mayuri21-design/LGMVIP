import react, { useState } from "react";
import User from "./User";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UserItems from "./UserItems";

const Gallery = () => {
  const [users, setusers] = useState(User);
  
    return (
        <>
          <h1 className="mt-5 mb-5 d-flex justify-content-center">
            <span className="mx-5 p-4" style={{ background: "green",color:"white" }}>Welcome To User's Profile</span>
          </h1>
          <hr />
          <div className="container-fluid">
            <div className=" d-flex justify-content-around">
              <button className="btn-lg btn btn-warning" >users</button>
            </div>
          </div>

          {/* main section */}
        <UserItems users={users}/>
        </>
      );
};
export default Gallery;
