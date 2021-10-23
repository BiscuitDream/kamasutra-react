import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <p>
          <Field name="newPostText" component="textarea" placeholder="введите текст нового поста" />
      </p>
      <p>
        <button type="submit">Add post</button>
      </p>
    </form>
  );
};

const AddPostReduxForm = reduxForm({form: 'profileAddNewPost'})(AddNewPostForm);

const MyPosts = (props) => {
  const postsElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />);

  const addPost = (formValues) => {
    console.log(formValues);
    props.addPost(formValues.newPostText);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <AddPostReduxForm onSubmit={addPost} />
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
