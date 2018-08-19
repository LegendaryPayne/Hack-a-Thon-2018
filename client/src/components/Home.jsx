import React, { Component } from 'react';
import { render } from 'react-dom';

class Home extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
<React.Fragment>
            <form className="text-center form-signin border border-light p-5" >

              <img className="ninja-logo" src="../../images/Postrninja_logo.png" alt="" width="72" height="72"/>

              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

              <label for="inputEmail" className="sr-only">Email address</label>

              <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus=""/>

              <label for="inputPassword" className="sr-only">Password</label>

              <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>

              <div className="checkbox mb-3">

                <label>

                  <input type="checkbox" value="remember-me"/> Remember me

                </label>
                <div>

                <a href="">Forgot password?</a>

                </div>
              </div>

              <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

              <p>Not a member?
                <a href="../signup.jsx">Register</a>
                </p>

              <p className="mt-5 mb-3 text-muted">© 2018</p>

            </form>

            </React.Fragment>
         
        );
    }
}

export default Home;