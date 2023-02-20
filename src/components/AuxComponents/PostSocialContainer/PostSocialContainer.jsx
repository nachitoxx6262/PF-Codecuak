//estilos
import styles from "./postSocialContainer.module.css";
//hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost, cleanPost } from "../../../redux/action";
//componentes
import CardPost from "../../blueprints/Social-UserPost/CardPost/CardPost";

const PostSocialContainer = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const userData = useSelector((state)=>state.userData)
  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch,posts]);
  
  useEffect(()=>{
    dispatch(getAllPost());
    return () => dispatch(cleanPost());
  },[dispatch])

  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return <CardPost userData={userData} post={post} key={post.id}/>;
      })}
    </div>
  );
};

export default PostSocialContainer;
