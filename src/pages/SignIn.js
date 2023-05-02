import React, { useContext, useState } from "react";
import "../styles/SignIn.css";
import { useNavigate } from "react-router-dom";
import { convertFileToBase64 } from "../utils.js";
import { AuthContext } from "../context/AuthContext";

const SignIn = ({ onSignIn }) => {
  const [username, setUsername] = useState("");
  const [photo, setPhoto] = useState(null);
  const [formError, setFormError] = useState(null);

  const navigate = useNavigate();
  const {handleSignIn} = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !photo) {
      setFormError("Please add a photo and fill in your name");
      return;
    }

    if (photo) {
      try {
        const base64 = await convertFileToBase64(photo);
        localStorage.setItem("photo", base64);
        navigate("/todo-tasks");
      } catch (error) {
        return setFormError("Failed to upload photo. Upload photo again!!!");
      }
    } else {
      navigate("/todo-tasks");
    }
    localStorage.setItem("username", username);
    handleSignIn();
  };

  return (
    <div className="signIn-container">
      <section className="form-section">
        <span className="signIn-text">Get Started</span>
        <form className="signIn-form" onSubmit={handleSubmit}>
          <div className="add-photo">
            <span>add a photo</span>
            <label htmlFor="photo">
              <div className="choose-photo">
                {photo ? (
                  <img src={URL.createObjectURL(photo)} alt="profile picture" />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44.3"
                    height="40.35"
                    viewBox="0 0 44.3 40.35"
                  >
                    <path
                      id="add_a_photo_FILL0_wght400_GRAD0_opsz48"
                      d="M38.65,15.3V11h-4.3V8h4.3V3.65h3V8H46v3H41.65v4.3ZM4.7,44a2.878,2.878,0,0,1-2.1-.9A2.878,2.878,0,0,1,1.7,41V15.35a2.906,2.906,0,0,1,.9-2.075,2.841,2.841,0,0,1,2.1-.925h7.35L15.7,8h14v3H17.1l-3.65,4.35H4.7V41h34V20h3V41a2.841,2.841,0,0,1-.925,2.1A2.906,2.906,0,0,1,38.7,44Zm17-7.3a8.37,8.37,0,0,0,8.5-8.55,8.137,8.137,0,0,0-2.45-6.025A8.263,8.263,0,0,0,21.7,19.7a8.287,8.287,0,0,0-8.5,8.45,8.324,8.324,0,0,0,2.425,6.1A8.2,8.2,0,0,0,21.7,36.7Zm0-3a5.305,5.305,0,0,1-3.95-1.575A5.435,5.435,0,0,1,16.2,28.15a5.288,5.288,0,0,1,1.55-3.9A5.35,5.35,0,0,1,21.7,22.7a5.372,5.372,0,0,1,3.925,1.55,5.244,5.244,0,0,1,1.575,3.9,5.388,5.388,0,0,1-1.575,3.975A5.327,5.327,0,0,1,21.7,33.7ZM21.7,28.2Z"
                      transform="translate(-1.7 -3.65)"
                    />
                  </svg>
                )}
              </div>
            </label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              style={{ display: "none" }}
            />
          </div>
          <div className="add-username">
            <label htmlFor="username">fill in your name</label>
            <input
              type="text"
              id="username"
              value={username}
              placeholder="your name"
              onChange={(e) => setUsername(e.target.value)}
            />
            {formError && <div className="error-message">{formError}</div>}
          </div>
          <div className="button-container">
            <button className="signIn-button" type="submit">
              <span>Sign In</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignIn;
