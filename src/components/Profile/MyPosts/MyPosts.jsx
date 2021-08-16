import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
  const postsElements = props.postsData.map(elem => <Post message={elem.message} likesCount={elem.likesCount} />);

  const newPostElement = React.createRef();

  const addPost = () => {
    // props.addPost();
    // const action = {type: 'ADD-POST'};
    const action = addPostActionCreator();
    props.dispatch(action);
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    // props.updateNewPostText(text);
    // const action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    const action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}
                    onChange={onPostChange}
                    value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
