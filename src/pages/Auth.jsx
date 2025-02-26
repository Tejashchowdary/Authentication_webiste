import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import image1 from "../assets/email.png";
import image2 from "../assets/password.png";
import image3 from "../assets/person.png";

const Auth = ({ setAuth }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAuth = () => {
    const { name, email, password } = formData;

    // Validation: Ensure required fields are filled
    if (isLogin) {
      if (!name || !password) {
        showError("Please enter all details.");
        return;
      }
    } else {
      if (!name || !email || !password) {
        showError("Please enter all details.");
        return;
      }
    }

    // Simulate authentication success
    setAuth(true);
    navigate("/"); // Redirect to home page
  };

  const showError = (message) => {
    setError(message);
    setTimeout(() => setError(""), 3000); // Hide error after 3 seconds
  };

  return (
    <div className="auth-container">
      {error && <div className="popup-alert">{error}</div>}

      <div className="container">
        <div className="header">
          <div className="text">{isLogin ? "Login" : "Sign Up"}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {/* Show Name Field in Both Login and Signup */}
          <div className="input">
            <img src={image3} alt="User Icon" />
            <input
              value={formData.name}
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Name"
              required
            />
          </div>

          {/* Show Email Only in Signup Mode */}
          {!isLogin && (
            <div className="input">
              <img src={image1} alt="Email Icon" />
              <input
                value={formData.email}
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Email Id"
                required
              />
            </div>
          )}

          {/* Password Field (Always Visible) */}
          <div className="input">
            <img src={image2} alt="Password Icon" />
            <input
              value={formData.password}
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
        </div>

        {/* Toggle Between Login & Signup */}
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)} className="toggle-link">
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>

       

        {/* Main Auth Button */}
        <div className="submit auth-btn" onClick={handleAuth}>
          {isLogin ? "Login" : "Sign Up"}
        </div>
      </div>
    </div>
  );
};

export default Auth;
