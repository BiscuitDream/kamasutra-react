import classes from './Post.module.css';

const Post = () => {
  return (
    <div className={classes.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThIRZXYvGCN_04MZEpnTlOAhtRMU9iXOlQoQ&usqp=CAU" />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
