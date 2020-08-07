import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import {
  Header,
  AboutCard,
  BlogCard,
  BlogList,
  ContactCard,
  ProfileCard,
} from "./Components";

function App() {
  return (
    <div className="app">
      <Header />
      {/* <Router>
        <Header />
        <ProfileCard />
        <Switch>
          <Route path="/about">
            <AboutCard />
          </Route>
          <Route path="/contact">
            <ContactCard />
          </Route>
          <Route path="/">
            <BlogList />
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
