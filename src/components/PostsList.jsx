import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = () => {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Max" body="Reat.js is awesome" />
        <Post author="Test" body="Test is good" />
        <Post author="Manuel" body="good" />
        <Post author="sample" body="sample body" />
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
