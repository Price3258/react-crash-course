import Post from "./Post";
import classes from "./PostsList.module.css";
import { useEffect, useState } from "react";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    try {
      fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setPosts((prevPosts) => {
        return [postData, ...prevPosts];
      });
    } catch (error) {
      console.log(error);
    }
  }

  const renderPosts = posts.map((post) => {
    return <Post key={post.body} author={post.author} body={post.body} />;
  });

  return (
    <>
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>{renderPosts}</ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <p style={{ textAlign: "center", color: "white" }}>Loading posts...</p>
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
