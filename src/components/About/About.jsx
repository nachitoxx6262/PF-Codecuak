
import { Typography,Box} from "@mui/material";
import AboutCards from "../blueprints/AboutCards/AboutCards";
import BacktoHome from "../blueprints/buttonsAuth/BacktoHome/BacktoHome";

const About = () => {
  return (
    <Box bgcolor="#D5DBDB" padding="2rem" height="100%" minHeight="100vh" sx={{backgroundAttachment: 'fixed', backgroundSize: 'cover'}}>
      <BacktoHome />
      <Box>
        <Typography
          variant="h1"
          color="#1E8449"
          fontFamily={"Sen"}
          align="center"
          fontWeight="bold"
        >
          Sobre Nosotros
        </Typography>
        <Typography
          variant="body1"
          color="black"
          fontFamily={"Sen"}
          align="center"
          marginBottom="20px"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </Box>
      <AboutCards />
    </Box>
  );
};

export default About;
