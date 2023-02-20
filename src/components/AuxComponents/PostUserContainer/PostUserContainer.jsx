//estilos
import styles from "./postUserContainer.module.css";
//hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//actions
import { getPostByUserId, cleanPost } from "../../../redux/action";
//componentes
import CardPost from "../../blueprints/Social-UserPost/CardPost/CardPost";

const PostUserContainer = ({userId}) => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostByUserId(userId));
    return () => dispatch(cleanPost());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {posts?.map((post) => {
        return <CardPost post={post} />;
      })}
    </div>
  );
};

export default PostUserContainer;
