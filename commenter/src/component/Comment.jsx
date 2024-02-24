import React, { useState } from "react";

import styles from '../component/Comment.module.css';

const Comment = ({ comment, deleteComment, toggleStar, addReply }) => {
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    if (replyText.trim() === "") return;
    const reply = {
      id: Math.random(),
      text: replyText,
    };
    addReply(comment.id, reply);
    setReplyText("");
  };

  return (
    <div className={styles.main_container}>
      <p className={styles.text}>{comment.text}</p>
      <button onClick={() => deleteComment(comment.id)} className={styles.delete_container}>Delete</button>
      <button onClick={() => toggleStar(comment.id)} className={styles.star_container}>
        {comment.starred ? "Unstar" : "Star"}
      </button>
      <div className={styles.sub_container}>
        <input
          type="text"
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder="Reply..."
        />
        <button onClick={handleReply} className={styles.reply_container}>Reply</button>
      </div>
      <div className={styles.sub2_container}>
        {comment.replies.map((reply) => (
          <div key={reply.id}>
            <p>{reply.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
