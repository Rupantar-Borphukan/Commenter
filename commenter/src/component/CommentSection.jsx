import React, { useState } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

import styles from "../component/CommentSection.module.css"; 

const CommentSection = () => {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, { ...comment, replies: [], starred: false }]);
  };

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const toggleStar = (id) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, starred: !comment.starred } : comment
      )
    );
  };

  const addReply = (id, reply) => {
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? { ...comment, replies: [...comment.replies, reply] }
          : comment
      )
    );
  };

  const sortByDate = () => {
    setComments([...comments.sort((a, b) => b.date - a.date)]);
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.sub_container}>
        <button onClick={sortByDate}>Sort by Date</button>
      </div>
      <CommentForm addComment={addComment} />
      <div className={styles.comments_list}>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            deleteComment={deleteComment}
            toggleStar={toggleStar}
            addReply={addReply}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
