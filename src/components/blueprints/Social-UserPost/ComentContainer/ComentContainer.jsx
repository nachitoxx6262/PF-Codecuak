//estilos
import styles from "./comentContainer.module.css";
//hooks
import { useState } from "react";
import { useSelector } from "react-redux";
//componentes
import CardComent from "../CardComent/CardComent.jsx";
import AddComent from "../AddComent/AddComent";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const ComentContainer = ({ socialcomments, image, userdevId, postId }) => {
    const userData = useSelector((state) => state.userData)



    return (

        <Box width={1}>
            <Box display="flex" flexDirection="column" justifyContent="center" gap="15px">
                <AddComent
                    userData={userData}
                    image={image}
                    userdevId={userdevId}
                    postId={postId} 
                    />
                    

                {
                    socialcomments?.map((comment) => <CardComent comment={comment} userData={userData} />)
                }
            </Box>

        </Box>
    )
}

export default ComentContainer;