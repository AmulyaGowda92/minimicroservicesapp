import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentsCreate from "./CommentsCreate";
import CommentsList from "./CommentsList";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    console.log(res.data);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  //   console.log(posts);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h5>{post.title}</h5>
          <CommentsList comments={post.comments} />
          <CommentsCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default PostList;
