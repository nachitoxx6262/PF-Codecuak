//importamos estilos
import style from "./formSocialPost.module.css";
//importamos hooks
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendPost } from "../../../axiosFunctions";
import { getAllPost } from "../../../redux/action";
// componentes

const FormSocialPost = ({user}) => {
  const dispatch = useDispatch();
  //usuario de prueba, los verdaderos vienen por props ya que el contenedor social hace el fetch de datos
  const [form, setForm] = useState("");
  const text = form.length;
  //const [users, setUsers] = useState("a2e13a38-ae82-40e2-9a43-ac5a66310f1d");

  const handlerChange = (event) => {
    const value = event.target.value;
    setForm(value);
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    sendPost(form, user.id);
    setForm("");
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.infoContainer}>
          <div className={style.imgContainer}>
            <img src={user.image} alt="foto del usuario" />
          </div>
          <p>{user.name}</p>
        </div>
        <div className={style.formContainer}>
          <form onSubmit={handlerSubmit}>
            <textarea
              value={form}
              onChange={handlerChange}
              placeholder={"Que es lo que quieres compartir?"}
            />
            <div>
              {text > 1400 ? (
                <p className={style.limitText}>{`${text}/1500 `}</p>
              ) : null}
              <button type="submit" disabled={text > 1500}>
                Publicar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default FormSocialPost;
