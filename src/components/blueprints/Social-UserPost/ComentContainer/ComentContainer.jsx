
//hooks
import { useDispatch, useSelector } from "react-redux";
//componentes
import CardComent from "../CardComent/CardComent.jsx";
import AddComent from "../AddComent/AddComent";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { getAllPost } from "../../../../redux/action.js";

const ComentContainer = ({ socialcomments, postId }) => {
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllPost())
    },[socialcomments])

    return (

        <Box width="90%">
            <Box display="flex" flexDirection="column" justifyContent="center" gap="15px">
                <AddComent
                    postId={postId} 
                    />
                {
                    socialcomments?.map((comment) => <CardComent comment={comment}/>)
                }
            </Box>

        </Box>
    )
}

export default ComentContainer;