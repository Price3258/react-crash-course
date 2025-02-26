import { useState } from "react";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

function NewPost({ onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorChange(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      author: enteredAuthor,
      body: enteredBody,
    };
    onAddPost(postData);
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={changeAuthorChange} />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button> Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
