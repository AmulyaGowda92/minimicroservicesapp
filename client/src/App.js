import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="container">
      <h3>Create Post</h3>
      <PostCreate />
      <hr />
      <h2>Posts</h2>
      <PostList />
    </div>
  );
};

export default App;
