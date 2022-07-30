import React, { useState } from "react";
import $ from "jquery";
import "./Login.css";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [primaryPassword, setPrimaryPassword] = useState("");
  const [secondaryPassword, setSecondaryPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, signUp } = useUserAuth();
  const navigate = useNavigate();

  $(document).ready(function () {
    $(".menu .item").tab();
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, primaryPassword);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (primaryPassword === secondaryPassword) {
      try {
        await signUp(email, primaryPassword);
        navigate("/home");
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError("Passwords do not match!");
    }
  };

  return (
    <div id="LoginPage" className="ui four column centered grid">
      <div className="column">
        <div className="ui segment">
          <h2 className="ui center aligned header">QuantifiedSelf</h2>
          <div className="ui fluid two item secondary pointing menu">
            <a className="item active" data-tab="first">
              Login
            </a>
            <a className="item" data-tab="second">
              Register
            </a>
          </div>
          {/* Login Form */}
          <div className="ui tab active" data-tab="first">
            <form onSubmit={handleLoginSubmit} className="ui form">
              <div className="field">
                <label>Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="email"
                  placeholder="Email address"
                />
              </div>
              <div className="field">
                <label>Password</label>
                <input
                  onChange={(e) => setPrimaryPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              {error && <div className="ui red message">{error}</div>}
              <button className="fluid ui green button" type="submit">
                Login!
              </button>
            </form>
          </div>
          {/* Register Form */}
          <div className="ui tab" data-tab="second">
            <form onSubmit={handleRegisterSubmit} className="ui form">
              <div className="field">
                <label>Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="email"
                  placeholder="Email address"
                />
              </div>
              <div className="field">
                <label>Set Password</label>
                <input
                  onChange={(e) => setPrimaryPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="field">
                <label>Confirm Password</label>
                <input
                  onChange={(e) => setSecondaryPassword(e.target.value)}
                  type="password"
                  name="last-name"
                  placeholder="password"
                />
              </div>
              {error && <div className="ui red message">{error}</div>}
              <button className="fluid ui green button" type="submit">
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
