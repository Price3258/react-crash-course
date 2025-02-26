import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";

const PostsList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((prevPosts) => {
      return [postData, ...prevPosts];
    });
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author="Test" body="Test is good" />
      </ul>
    </>
  );
};

export default PostsList;
/*

 <Post author="Max" body="Reat.js is awesome" />
      <Post author="Test" body="Test is good" />
      <Post author="Manuel" body="good" />
      <Post author="sample" body="sample body" />
*/
