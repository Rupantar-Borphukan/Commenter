import React, { useState } from "react";

import styles from "../component/CommentForm.module.css";

const CommentForm = ({ addComment }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const newComment = {
      id: Math.random(),
      text: text,
    };
    addComment(newComment);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.main_container}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Comment Here 💬..."
        className={styles.text_container} />
      <button type="submit" className={styles.post_container}>Post</button>
    </form>
  );
};

export default CommentForm;
