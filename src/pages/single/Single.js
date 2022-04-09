import React from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editBtn">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt="image"
                className="itemImage"
              />
              <div className="details">
                <h2 className="itemTitle">Tim Smith</h2>
                <div className="detailItem">
                  <span className="key">Email: </span>
                  <span className="value">tim@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="key">Phone: </span>
                  <span className="value">+1 234 567 89 10</span>
                </div>
                <div className="detailItem">
                  <span className="key">Address: </span>
                  <span className="value">New York</span>
                </div>
                <div className="detailItem">
                  <span className="key">Country: </span>
                  <span className="value">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Single;
