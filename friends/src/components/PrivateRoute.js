import React from "react";
import { Route, Redirect } from "react-router-dom";

// it uses the same APT as <Route/>
// it renders the Route and passes the props through
// it checks if user is auth, if so, render 'component'
// if not redirect to /login

const PrivateRoute = ({ component: Component, ...props }) => {
    return (
      <Route
        {...props}
        render={() => {
          if (localStorage.getItem('token')){
          return <Component />;
          } else {
            return <Redirect to ='/login'/>
          }
        }}
      />
    );
  };

export default PrivateRoute;