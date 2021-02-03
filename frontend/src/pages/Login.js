import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Sign In</h3>
            </div>
            <div className="card-body">
              <form>
                 <div className="input-group form-group">
                 <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                 </div>
                 <input type="text" className="form-control" placeholder="username"></input>
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-key"></i></span>
              </div>
              <input type="password" className="form-control" placeholder="password"></input>
            </div>
            <div className="row align-items-center remember">
              <input type="checkbox" id="checkbox" defaultChecked></input>
              <label htmlFor="checkbox">Remember Me</label>
            </div>
            <div className="form-group">
              <input type="submit" value="Login" className="btn float-right login_btn"></input>
            </div>
          </form>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-center links">
            Don't have an account?<Link to="/signup">Sign Up</Link>
          </div>
          <div className="d-flex justify-content-center">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
    </div>
    </React.Fragment>
  );
}

export default Login;