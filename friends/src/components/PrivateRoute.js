import React from "react";
import { Route, Redirect } from "react-router-dom";

// it uses the same APT as <Route/>
// it renders the Route and passes the props through
// it checks if user is auth, if so, render 'component'
// if not redirect to /login

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => {
          if (localStorage.getItem("token")) {
            return <Component {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    );
  };
  
export default PrivateRoute;


// ///CHRIS Support Hour Way 🔻 

// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// export function PrivateRoute(props) {
//   const { children, ...rest } = props

//   return (
//     <Route 
//     {...rest}
//     render={()=> {
//       return localStorage.getItem('token') ? (
//         children
//       ) : (
//         <Redirect to='/Login' />
//       )
//     }}
//     />
//   )

// }