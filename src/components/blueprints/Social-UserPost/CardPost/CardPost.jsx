//estilos
import styles from "./CardPost.module.css";
//hooks
import { useState } from "react";
//componentes
import AddComent from "../AddComent/AddComent";
import ComentContainer from "../ComentContainer/ComentContainer";


const CardPost = ({ post,userData }) => {
  // datos del posteo
  const { content, socialcomments, imagePost, likes, userdevId, id } = post;
  //datos del usuario que hizo el posteo
  const { name, image } = post.userdev

  const [likeState, setStateLike] = useState(false);
  const [like, setLike] = useState(likes);

  const handlerClick = () => {
    if (likeState == true) {
      setLike(like - 1)
    }
    else {
      setLike(like + 1)
    }
    setStateLike(!likeState)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.userData}>
          <img src={image} alt="Foto de perfil" />
          <span>{name}</span>
        </div>
        {post.imagePost ? (
          <div className={styles.imagePost}>
            <img src={imagePost} alt="Imagen del posteo" />
          </div>
        ) : (
          <></>
        )}
        <div className={styles.content}>
          <p>{content}</p>
        </div>
        <div className={styles.likes}>
          <button
            className={
              likeState
                ? "fa-sharp fa-solid fa-heart"
                : "fa-sharp fa-regular fa-heart"
            }
            onClick={() => handlerClick()}
          />
          <span>{like}</span>
        </div>
        <div className={styles.addComent}>
          <AddComent
            userData={userData}
            image={image}
            userdevId={userdevId}
            postId={id}
          />
        </div>
        <div className={styles.comentarios}>
          <ComentContainer socialcomments={socialcomments}/>
        </div>
      </div>
    </>
  );
};

export default CardPost;
