import React from "react";
import { Switch, Route } from "react-router-dom";

import { blogPosts, featuredPosts, getBlogPost } from "./Data/blogPosts";
import "./App.css";

import {
  Header,
  AboutCard,
  BlogPost,
  BlogList,
  ContactCard,
  ProfileCard,
} from "./Components";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="appContent">
        <div className="appNarrowContainer">
          <div className="appProfile">
            <ProfileCard featuredPosts={featuredPosts} />
          </div>
          <div className="appPanel">
            <Switch>
              <Route exact path="/about">
                <AboutCard />
              </Route>
              <Route exact path="/contact">
                <ContactCard />
              </Route>
              <Route exact path="/">
                <BlogList blogPosts={blogPosts} />
              </Route>
              <Route
                exact
                path="/:blogPostTitle"
                render={({ location }) => (
                  <BlogPost blogPost={getBlogPost(location.state.id)} />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
