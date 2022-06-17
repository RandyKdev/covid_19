import React, { useState } from 'react';
import './login.css';

function Login({ route}){
  const [isLogin, setIsLogin] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const onSignup = () => {

    route();
  }

  const onLogin = () => {

    route();
}
 
    return (
        <div id="form">
        <div className="container">
          <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-md-8 col-md-offset-2">
            <div id="userform">
              <ul className="nav nav-tabs nav-justified" role="tablist">
                <li className={isLogin ? "" : "active"}><a onClick={() => setIsLogin(false)} href="#"  role="tab" data-toggle="tab">Sign up</a></li>
                <li className={isLogin ? "active" : ""} ><a href="#" onClick={() => setIsLogin(true)}  role="tab" data-toggle="tab">Log in</a></li>
              </ul>
              <div className="tab-content">
               {isLogin ? getLoginPage() : getSignupPage()}
            
              </div>
            </div>
          </div>
        </div>
      </div>
    );
 
    function getSignupPage() {
        // debugger;
        return( <div className="tab-pane fade active in" id="signup">
        <h2 className="text-uppercase text-center"> Sign Up for Free</h2>
        <form id="signup">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="form-group">
                <label>First Name<span className="req">*</span> </label>
                <input type="text" value={firstName} onChange={(text) => setFirstName(text.target.value)} className="form-control" id="first_name" required data-validation-required-message="Please enter your name." autoComplete="off" />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="form-group">
                <label> Last Name<span className="req">*</span> </label>
                <input type="text" value={lastName} onChange={(text) => setLastName(text.target.value)} className="form-control" id="last_name" required data-validation-required-message="Please enter your name." autoComplete="off" />
                <p className="help-block text-danger"></p>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label> Your Email<span className="req">*</span> </label>
            <input type="email" value={email} onChange={(text) => setEmail(text.target.value)} className="form-control" id="email" required data-validation-required-message="Please enter your email address." autoComplete="off" />
            <p className="help-block text-danger"></p>
          </div>
          <div className="form-group">
            <label> Your Phone<span className="req">*</span> </label>
            <input type="tel" value={phone} onChange={(text) => setPhone(text.target.value)} className="form-control" id="phone" required data-validation-required-message="Please enter your phone number." autoComplete="off" />
            <p className="help-block text-danger"></p>
          </div>
          <div className="form-group">
            <label> Password<span className="req">*</span> </label>
            <input type="password" value={password} onChange={(text) => setPassword(text.target.value)} className="form-control" id="password" required data-validation-required-message="Please enter your password" autoComplete="off" />
            <p className="help-block text-danger"></p>
          </div>
          <div className="mrgn-30-top">
            <button onClick={onSignup} type="submit" className="signup btn ">
            Sign up
            </button>
          </div>
        </form>
      </div>
      )
    }
    
    
    function getLoginPage(){
        return(
            <div className="tab-pane fade active in" id="signup">
        <h2 className="text-uppercase text-center">Welcome back! Login</h2>
        <form id="signup">
         
          <div className="form-group">
            <label> Your Email<span className="req">*</span> </label>
            <input type="email" value={email} onChange={(text) => setEmail(text.target.value)} className="form-control" id="email" required data-validation-required-message="Please enter your email address." autoComplete="off" />
            <p className="help-block text-danger"></p>
          </div>
          
          <div className="form-group">
            <label> Password<span className="req">*</span> </label>
            <input type="password" value={password} onChange={(text) => setPassword(text.target.value)} className="form-control" id="password" required data-validation-required-message="Please enter your password" autoComplete="off" />
            <p className="help-block text-danger"></p>
          </div>
          <div className="mrgn-30-top">
            <button type="submit" onClick={onLogin} className="signup btn ">
            Login
            </button>
          </div>
        </form>
      </div>
        )
    }
}




export default Login;
