import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth } from "./components/firebase/firebase";
import Home from "./components/pages/home/home";
import Login from "./components/pages/auth/login";
import NotFound from "./components/404/notFound";
import Header from "./components/header/header";
import "./App.css";

function App() {
  const [currentUser, setCurrentuser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentuser(user);
    });
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/notFound" component={NotFound} />
        <Redirect to="/notFound" />
      </Switch>
    </div>
  );
}

export default App;
