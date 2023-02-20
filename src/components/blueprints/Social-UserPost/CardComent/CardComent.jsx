//estilos
import styles from "./CardComent.module.css"
//hooks
import { useState } from "react";

const CardComent=({comment,userData})=>{
    
    const [like, setStatuslike] = useState(false);
    return(
        <div className={styles.container}>
            <div className={styles.containerData}>
                <img src={userData.image} alt="Foto de usuario" />
                <h4>{ userData.name }</h4>
            </div>
            <div className={styles.coment}>
                <p>{ comment.content }</p>
            </div>
            <div className={styles.likes}>
                <button className={like? "fa-sharp fa-solid fa-heart" : "fa-sharp fa-regular fa-heart"} onClick={()=>setStatuslike(!like)}/>
                <span>{comment.likes} </span>
            </div>
        </div>
    )
}

export default CardComent;