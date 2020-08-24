import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createDoc } from "./components/firebase/firebase";
import Home from "./components/pages/home/home";
import Login from "./components/pages/auth/login";
import Register from "./components/pages/auth/register";
import Order from "./components/pages/order/order";
import NotFound from "./components/404/notFound";
import Header from "./components/header/header";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (!user) return setCurrentUser(user);

      const userRef = await createDoc(user);

      userRef.onSnapshot((snap) => {
        const data = {
          id: snap.id,
          ...snap.data(),
        };

        setCurrentUser(data);
      });
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [currentUser]);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route path="/order" exact component={Order} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/notFound" component={NotFound} />
        <Redirect to="/notFound" />
      </Switch>
    </div>
  );
}

export default App;
