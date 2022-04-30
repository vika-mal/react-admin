import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./new.scss";

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
              alt="user"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="john_smith" />
              </div>
              <div className="formInput">
                <label>Name and surname</label>
                <input type="text" placeholder="John Smith" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="john_smith@gmail.com" />
              </div>
              <div className="formInput">
                <label>Tel</label>
                <input type="text" placeholder="+1 234 567 89 10" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="Elton St. 216 NY" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="USA" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
