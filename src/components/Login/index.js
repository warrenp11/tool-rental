import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="container shadow my-3">
        <div className="row">
          <div className="col-md-5">
            <h2 className="display-4">Welcome Back!</h2>
            <p className="">Enter Your Username and Password To Login</p>
            <h5>OR</h5>
            <NavLink
              to="/signup"
              className="btn btn-primary rounded-pill pb-2 w-50"
            >
              Sign Up
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h2 className="display-6 fw-bolder mb-3">LOGIN</h2>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
