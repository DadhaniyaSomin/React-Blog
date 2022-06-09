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

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Challenge: Go big or go home",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "What’s better than people loving your app on iPhone? People loving your app on iPad and Mac, too! This challenge invites you to explore the ways you can expand your app’s presence in the Apple ecosystem. Explore prototyping your iPhone app for iPad, adding new desktop-class features to your iPad app, or bringing your app to macOS. Whatever it means to you, think big \n If you already have an iPad app, this challenge is a great opportunity to refine it. If your iPad app is already at the top of its game, explore bringing it to Mac with Mac Catalyst — and consider the differences in the iPad and Mac idioms. "
    },
    {
      id: 2,
      title: "Create ML",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "The Create ML app lets you quickly build and train Core ML models right on your Mac with no code. The easy-to-use app interface and models available for training make the process easier than ever, so all you need to get started is your training data. You can even take control of the training process with features like snapshots and previewing to help you visualize model training and accuracy. Dive deeper and gain more control of model creation using the Create ML framework and Create ML Components."
    },
    {
      id: 3,
      title: "Access comprehensive services.",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Leverage Apple’s tightly integrated hardware, software, services, and capabilities to create useful and engaging experiences. Allow your users to subscribe to special content, experience your app in new ways using augmented reality, create intelligent features with on-device machine learning, and quickly purchase items within your app with Apple Pay, sign in to your app and website with their Apple ID, get things done with just their voice using Siri, and much more."
    }
  ])

  
  const [search, setSearch] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  // const [postTitle, setPostTitle] = useState('');
  // const [postBody, setPostBody] = useState('');
  // const history = useHistory();

  const handleDelete = () => {

  };

  return (
    <div className="App">
     <Header title="Somin's Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Switch>
        <Route exact path="/">
          <Home posts = {posts} />
        </Route>
        <Route exact path="/post">
          <NewPost/>
        </Route>
        <Route path="/post/:id">
          <PostPage  posts= {posts} handleDelete ={handleDelete} />
        </Route>
        <Route path="/about" component={About} />
        <Route path="*" component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
