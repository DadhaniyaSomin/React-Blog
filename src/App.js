import Header from "./componant/Header";
import Nav from "./componant/Nav";
import Footer from "./componant/Footer";
import Home from "./componant/Home";
import NewPost from "./componant/NewPost";
import PostPage from "./componant/PostPage";
import About from "./componant/About";
import Missing from "./componant/Missing";

import {  Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
     <Header title="React JS Blog" />
      <Nav  />
      <Switch>
        <Route exact path="/">
          <Home  />
        </Route>
        <Route exact path="/post">
          <NewPost/>
        </Route>
        <Route path="/post/:id">
          <PostPage  />
        </Route>
        <Route path="/about" component={About} />
        <Route path="*" component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
