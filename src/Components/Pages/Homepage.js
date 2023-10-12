import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { ToastContainer, toast } from "react-toastify";

const Homepage = () => {
  const profilePicDefault =
    "https://i.pinimg.com/736x/57/e4/7f/57e47fa25cab8a9b49aca903bfa049a8.jpg";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [checked, setChecked] = useState(false);
  // const [img, setImg] = useState(profilePicDefault);

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onabort = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  //hendle img
  const handleImg = (e) => {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      localStorage["img"] = base64;
      console.debug("File Store", base64);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Name is Required");
    } else if (email === "") {
      toast.error("Email is Required");
    } else if (password === "") {
      toast.error("Password is Required");
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("gender", gender);
      // localStorage.setItem("img", img);
      localStorage.setItem("checked", checked);
      toast.success("User Saved!");
    }
  };
  return (
    <>
      <Header />
      <div className="container content mt-4">
        <h5>Add New User</h5>
        <div className="row border p-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail" className="form-label">
                Email Address
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <div className="mb-3">
                <label htmlFor="exampleInputPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="form-control"
                  id="exampleInputPassword"
                  // aria-describedby="emailHelp"
                />
              </div>
              <div className="d-flex flex-row">
                Gender :
                <div className="form-check ms-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Gender"
                    id="inlineRadio1"
                    value="Male"
                    defaultChecked={gender === "Male"}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Male
                  </label>
                </div>
                <div className="form-check ms-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Gender"
                    id="inlineRadio2"
                    value="Femaile"
                    defaultChecked={gender === "Female"}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                checked={checked}
                onChange={(e) => {
                  setChecked(e.target.value);
                }}
              />
              <label className="form-check-label" for="flexCheckDefault">
                I Accept Terms And Conditions
              </label>
            </div>
            <button
              type="submit"
              className="form-button"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <ToastContainer />
          </div>
          {/* col-md-6 end */}

          <div className="col-md-4">
            <div className="profile__section">
              <p>Select Profile Picture :</p>
              <img
                src={profilePicDefault}
                alt="profile_pic"
                className="img-thumbnail"
                height={250}
                width={250}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Default file input example
              </label>
              <input
                type="file"
                className="form-control"
                id="formFile"
                onChange={handleImg}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Homepage;
