import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsElements = props.postsData.map(elem => <Post message={elem.message} likesCount={elem.likesCount} />);

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
