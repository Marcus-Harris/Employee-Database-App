import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar, Footer, Loading } from "./Components";
import { Home, Profile, ExternalApi } from "./views";
import ProtectedRoute from "./auth/protected-route";
import Table from "./Components/Table";
import AddEmployee from "./Components/AddEmployee";

import "./App.css";

const App = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={AddEmployee} />
          <ProtectedRoute path="/add" component={AddEmployee} />
          <ProtectedRoute path="/view" component={Table} />
          <ProtectedRoute path="/profile" component={Profile} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;