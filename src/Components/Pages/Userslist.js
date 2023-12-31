import React from "react";
import Header from "../Header";

const Userslist = () => {
  const profilePicDefault =
    "https://i.pinimg.com/736x/57/e4/7f/57e47fa25cab8a9b49aca903bfa049a8.jpg";
  return (
    <>
      <Header />
      <div className="container content">
        <div className="border mt-4 p-4">
          <h3 className="text-center bg-info p-2 mb-3">
            Welcome To User Management System.
          </h3>
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center">
                <img
                  src={
                    localStorage.getItem("img")
                      ? localStorage.getItem("img")
                      : profilePicDefault
                  }
                  alt="profile_pic"
                  className="img-thumbnail"
                  height={200}
                  width={200}
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items center">
              <div className="ms-4">
                <h4>
                  Name :{" "}
                  {localStorage.getItem("name")
                    ? localStorage.getItem("name")
                    : "NA"}
                </h4>
                <h4>
                  Email :{" "}
                  {localStorage.getItem("email")
                    ? localStorage.getItem("email")
                    : "NA"}
                </h4>
                <h4>
                  Gender :{" "}
                  {localStorage.getItem("gender")
                    ? localStorage.getItem("gender")
                    : "NA"}
                </h4>
                <p>
                  Accepted Terms and Conditions :{" "}
                  {localStorage.getItem("checked") ? "Yes" : "No"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userslist;
