import React from 'react';
import './Login.css';

const Signup = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Register</h3>
            </div>
            <div className="card-body">
              <form>
                 <div className="input-group form-group">
                   <input type="text" className="form-control" placeholder="firstname"></input>
                   <input type="text" className="form-control" placeholder="lastname" style={{marginLeft: "15px"}}></input>
                 </div>
                 <div className="input-group form-group">
                   <input type="text" className="form-control" placeholder="username"></input>
                 </div>
                <div className="input-group form-group">
                  <input type="password" className="form-control" placeholder="password"></input>
                </div>
                <div className="form-group">
                  <input type="submit" value="Sign Up" className="btn login_btn"></input>
                </div>
              </form>
        </div>
      </div>
    </div>
    </div>
    </React.Fragment>
  );
}

export default Signup;