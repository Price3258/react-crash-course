import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = () => {
  const posts = useLoaderData();

  const renderPosts = posts.map((post) => {
    return <Post key={post.body} author={post.author} body={post.body} />;
  });

  return (
    <>
      {posts.length > 0 && <ul className={classes.posts}>{renderPosts}</ul>}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
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
