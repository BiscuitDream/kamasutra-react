import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  const postsData = [
    { id: 1, message: 'Hi, how are you?', likesCount: 15 },
    { id: 2, message: 'It\'s my first post', likesCount: 20 },
  ];

  const postsElements = postsData.map(elem => <Post message={elem.message} likesCount={elem.likesCount} />);

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
