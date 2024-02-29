import Home from "./Home";
import LoginForm from "./LoginForm";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React from "react";
import { Provider, inject, observer } from 'mobx-react';
import buyStore from "./Store/BuyStore";
import positionStore from "./Store/PositionStore";
function App() {
  return (
    <Provider buyStore={buyStore} positionStore={positionStore}>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="/login" Component={LoginForm}></Route>
        <Route path="/home" Component={Home}></Route>
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
