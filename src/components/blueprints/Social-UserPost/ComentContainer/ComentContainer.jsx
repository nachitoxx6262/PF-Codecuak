
//hooks
import { useSelector } from "react-redux";
//componentes
import CardComent from "../CardComent/CardComent.jsx";
import AddComent from "../AddComent/AddComent";
import { Box } from "@mui/system";

const ComentContainer = ({ socialcomments, postId }) => {



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