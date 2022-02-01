import React from "react";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <div>
      <div className="container shadow my-3">
        <div className="row">
          <div className="col-md-5 order-2">
            <h2 className="display-4">Hello There!</h2>
            <p className="">Enter A Username and Password To Signup</p>
            <h5>OR</h5>
            <NavLink
              to="/login"
              className="btn btn-primary rounded-pill pb-2 w-50"
            >
              Login
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h2 className="display-6 fw-bolder mb-3">SIGNUP</h2>
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                />
              </div>
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
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
