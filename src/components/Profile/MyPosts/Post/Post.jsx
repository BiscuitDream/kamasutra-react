import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThIRZXYvGCN_04MZEpnTlOAhtRMU9iXOlQoQ&usqp=CAU" />
      {props.message}
      <div>
        <span>like {props.likeCounts}</span>
      </div>
    </div>
  );
};

export default Post;
