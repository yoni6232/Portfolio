import React, { Component } from 'react';
import { connect} from 'react-redux';
import {BrowserRouter as Router,Link,Route,NavLink} from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import Users from './containers/Users';
import User from './containers/User';
import {changeSiteName} from '../src/actions/siteActions'
import PrivateRoute from './containers/PrivateRoute';
import {logoutAction} from './actions/usersActions'
class App extends Component {
  render() {
    let loginLink = <li className="nav-item"><NavLink className="nav-link" to="/login">Login </NavLink></li>;
    if (this.props.isLogged === true) {
      loginLink =  <li className="nav-item"><Link className="nav-link" to="/login" onClick={this.handlerLogout}>Logout </Link></li>;
    }

    // setTimeout(()=>{
    //   this.props.changeSiteName('YoniWeb');
    // },2000)
    return (
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
          <Link to="/">{this.props.siteName} </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
            <li className="nav-item">  <NavLink className="nav-link" exact to="/">Home </NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/users">Users </NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/user/1">User Number</NavLink></li>
            <li className="nav-item">  <NavLink className="nav-link" exact to="/register">Register </NavLink></li>
            {loginLink}

            </ul>
          </div>
        </nav>
        <div className="container">
          <Route path = "/" exact component={Home}/>
          <Route path = "/login" component={Login}/>
          <Route path = "/register" component={Register}/>
          <PrivateRoute path = "/users/:pageNumber?" component={Users}/>
          <PrivateRoute path = "/user/:userID" component={User}/>
          </div>

        </Router>
    );
  }
  handlerLogout =() =>{
    this.props.logout();

  }
}

  const mapStateToProps = state =>{
    return {
      siteName : state.siteReducer.siteName,
      isLogged : state.usersReducer.isLogged
    }
  }// return object 

  const mapDispacthToProps = disaptch =>{
    return{
      changeSiteName(newSiteName){
        disaptch(changeSiteName(newSiteName))
      },
      logout(){
        disaptch(logoutAction());
      }
    }
  }


export default connect(mapStateToProps,mapDispacthToProps)(App);
