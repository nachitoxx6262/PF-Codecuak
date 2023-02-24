
//hooks
import { useSelector } from "react-redux";
//componentes
import CardComent from "../CardComent/CardComent.jsx";
import AddComent from "../AddComent/AddComent";
import { Box } from "@mui/system";

const ComentContainer = ({ socialcomments, image, userdevId, postId }) => {
    const userData = useSelector((state) => state.userData)
    return (

        <Box width="90%">
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