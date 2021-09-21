import React from "react";

const CommentsList = ({ comments }) => {
  // useEffect(() => {
  //   const fetchComments = async () => {
  //     const res = await axios.get(
  //       `http://localhost:4001/posts/${postId}/comments`
  //     );

  //     setList(res.data);
  //   };
  //   fetchComments();
  // }, [postId]);

  const commentsList = comments.map((comment) => {
    let content;
    if (comment.status === "pending")
      content = "The comment is awaiting for moderation";

    if (comment.status === "approved") content = comment.content;

    if (comment.status === "rejected")
      content = "The comment has been rejected";
    return (
      <>
        <li key={comment.id}>{content}</li>
      </>
    );
  });

  return <ul>{commentsList}</ul>;
};

export default CommentsList;
