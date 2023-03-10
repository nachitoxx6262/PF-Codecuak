//estilos css
import styles from "./userProfile.module.css"
// dependencias MUI
import { Box, Typography, Divider } from "@mui/material"
// componentes
import CardUser from "../../AuxComponents/CardUser/CardUser";
import PostUserContainer from "../../AuxComponents/PostUserContainer/PostUserContainer";

const UserProfile = ({ user }) => {

    // imagenes portada y perfil por default
    const portadaDefault = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZZeLZAzPyAtBhCUl384gDJYN3ROMfPXtPDUlu3QAX9gyEEX6';
    const imageDefault = 'https://st2.depositphotos.com/19428878/44645/v/600/depositphotos_446453832-stock-illustration-default-avatar-profile-icon-social.jpg';

    // Creo un objeto con los datos necesarios en cardUser, para pasarlos por props
    const cardUserData = {
        name: user.name,
        nickName: user.nickName,
        image:user.image ? user.image : imageDefault,
        email:user.email,
        gitHub:user.gitHub
    }

    return (
        <Box bgcolor="#D5DBDB" className={styles.container} marginTop="70px">
            <Box className={styles.subContainer1}>
                <Box className={styles.subContainerUser} sx={{ boxShadow: '0px 4px 6px rgba(1, 1, 1, 0.20)' }} maxWidth="70%">
                    <Box className={styles.portada}>
                        <img src={user.portada || portadaDefault} alt="Imagen de portada" />
                    </Box>
                    <Box className={styles.subContainerData}>
                        <CardUser user={cardUserData} />
                    </Box>
                    <Divider variant="middle" sx={{ borderBottomWidth: 2 }} />
                    <Box className={styles.subContainer2}>
                        <Box className={styles.containerSkills}>
                            <Box className={styles.title}>
                                <Typography>Mis habilidades:</Typography>
                            </Box>
                            <Box className={styles.TechnicalSkills}>
                                <Typography>Technical Skills:</Typography>
                                <Box>
                                    <ul>
                                        {user.softSkills?.map((skill) => {
                                            return (
                                                <li>{skill}</li>
                                            )
                                        })}
                                    </ul>
                                </Box>
                            </Box>
                            <Box className={styles.SoftSkills}>
                                <Typography>Soft Skills:</Typography>
                                <Box>
                                    <ul>
                                        {user.softSkills?.map((skill) => {
                                            return (
                                                <li>{skill}</li>
                                            )
                                        })}
                                    </ul>
                                </Box>
                            </Box>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box className={styles.containerExperience}>
                            <Box className={styles.title}>
                                <Typography>Mis experiencias:</Typography>
                            </Box>
                            <Box>
                                <ul>
                                    {user.experiences?.map((exp) => {
                                        return (
                                            <li>{exp}</li>
                                        )
                                    })}
                                </ul>
                            </Box>
                        </Box>
                    </Box>
                    <Divider variant="middle" sx={{ borderBottomWidth: 2 }} />
                    <PostUserContainer/>
                </Box>
            </Box>
        </Box>
    )
}

export default UserProfile