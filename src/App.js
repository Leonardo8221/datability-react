import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Notification from "./components/common/Notification";
import PrivateRoute from "./components/routing/privateRoute";

import CoPilot from "./pages/CoPilot";
import Login from "./pages/Login";
import Connections from "./pages/Connections";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import CheckIn from "./pages/CheckIn";

import setAuthToken from "./utils/setAuthToken";
import store from "./redux/store";
import { loadUser, logout } from "./redux/actions/auth";
import "./App.scss";

function App() {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API

    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch(logout());
    });
  }, []);

  return (
    <Router>
      <Notification />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<PrivateRoute component={Layout} />}>
          <Route path="/co-pilot" element={<CoPilot />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route
          path="/check-in"
          element={<PrivateRoute component={CheckIn} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
