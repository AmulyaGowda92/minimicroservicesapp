import React, { useState } from "react";
import Axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:4000/posts", { title });
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" style={{ marginTop: "8px" }}>
          submit
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
