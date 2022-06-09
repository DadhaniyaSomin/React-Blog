import React from "react";
import Feed from "./Feed";
const Home = ({ posts }) => {
  // alert({posts});
  return (
    <main className="Home">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "2rem" }}> No Posts</p>
      )}
    </main>
  );
};

export default Home;
