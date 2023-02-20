//estilos
import styles from "./AddComent.module.css";
//hooks
import { useState } from "react";
//actions
import { sendComment } from "../../../../axiosFunctions";

const AddComent = (props) => {
    const {userData,image,userdevId,postId} = props
    const [coment, setComent] = useState("")
    const handlerChange = (event) => {
        const value = event.target.value;
        setComent(value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        sendComment(coment, userdevId, postId);
        setComent("");
    }

    const selectClass=()=>{
        return(
            coment.length ? styles.buttonOn : styles.buttonOff
        )
    }

    return (
        <div className={styles.container}>
            <img src={userData} alt="" />
            <form action="" className={styles.form} onSubmit={submitHandler}>
                <textarea type="text" placeholder="Escribe un comentario..." onChange={handlerChange} value={coment} />
                <button id="submit" type="submit" className={selectClass()}>Enviar</button>
            </form>
        </div>
    )
}

export default AddComent