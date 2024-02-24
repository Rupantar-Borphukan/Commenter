import React from 'react'

import CommentSection from "../component/CommentSection";         // importing CommentSection file from component Folder
import Starbg from "../assets/Star_bg.mp4";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div>
      <video
        src={Starbg}
        autoPlay
        loop
        muted
        className={styles.main_container}
      />
      <CommentSection />
    </div>
  );
}

export default Main