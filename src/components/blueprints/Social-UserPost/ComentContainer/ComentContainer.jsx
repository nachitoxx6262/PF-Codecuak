//estilos
import styles from "./comentContainer.module.css";
//hooks
import { useState } from "react";
import { useSelector } from "react-redux";
//componentes
import CardComent from "../CardComent/CardComent.jsx";

const ComentContainer=({socialcomments})=>{
    const userData = useSelector((state)=>state.userData)
    const [viewComents, setViewComents] = useState(false);

    const selectClass=()=>{
        return(
            socialcomments.length ? styles.buttonOn : styles.buttonOff
        )
    }

    return(

        <div className={styles.container}>

            <button className={selectClass()} onClick={()=>setViewComents(!viewComents)}>Comentarios</button>
            
            {viewComents ? socialcomments?.map((comment)=><CardComent comment = {comment} userData={userData}/>) :
            <></>
            }

        </div>
    )
}

export default ComentContainer;