import React from "react";
import Style from "./Terminos.module.css";
import BacktoHome from "../blueprints/buttonsAuth/backToHome/BacktoHome";
import { Box, Paper, Typography } from "@mui/material";
const Terminos = () => {
  return (
    <Box
      fontWeight="bold"
      bgcolor="#D5DBDB"
      padding="5rem"
      height="100%"
      minHeight="100vh"
      sx={{ backgroundAttachment: "fixed", backgroundSize: "cover" }}
    >
      <BacktoHome />
      <Typography
        variant="h1"
        color="#1E8449"
        fontFamily={"Sen"}
        align="center"
        marginBottom="10px"
      >
        Terminos y Condiciones
      </Typography>
      <Box className={Style.codetext}>
        <Typography
          variant="body1"
          color="black"
          fontFamily={"Sen"}
          align="Left"
          marginBottom="20px"
        >
          <Typography
            variant="h6"
            fontFamily={"Sen"}
            fontWeight="bold"
            sx={{ display: "inline" }}
          >
            Licencia de uso:
          </Typography>
          CodeCuak concede a los usuarios una licencia limitada, no exclusiva y
          no transferible para usar la plataforma y el contenido generado por el
          usuario con el propósito de interactuar con otros usuarios de la
          plataforma.
        </Typography>
        <Typography
          variant="body1"
          color="black"
          fontFamily={"Sen"}
          align="Left"
          marginBottom="20px"
        >
          <Typography
            variant="h6"
            fontFamily={"Sen"}
            fontWeight="bold"
            sx={{ display: "inline" }}
          >
            Contenido generado por el usuario:
          </Typography>
          Los usuarios son los únicos responsables del contenido que publiquen
          en la plataforma. CodeCuak se reserva el derecho de eliminar cualquier
          contenido que considere inapropiado o violatorio de los términos y
          condiciones.
        </Typography>

        <Typography
          variant="body1"
          color="black"
          fontFamily={"Sen"}
          align="Left"
          marginBottom="20px"
        >
          <Typography
            variant="h6"
            fontFamily={"Sen"}
            fontWeight="bold"
            sx={{ display: "inline" }}
          >
            Propiedad intelectual:
          </Typography>
          Todo el contenido en la plataforma, incluyendo textos, imágenes,
          gráficos, videos y marcas registradas, son propiedad de CodeCuak o sus
          licenciantes. Los usuarios no pueden utilizar el contenido de la
          plataforma para ningún otro propósito que no sea el uso de la
          plataforma.
        </Typography>

        <Typography
          variant="body1"
          color="black"
          fontFamily={"Sen"}
          align="Left"
          marginBottom="20px"
        >
          <Typography
            variant="h6"
            fontFamily={"Sen"}
            fontWeight="bold"
            sx={{ display: "inline" }}
          >
            Privacidad:
          </Typography>
          CodeCuak recopila, utiliza y protege la información personal de los
          usuarios de acuerdo con su política de privacidad. Los usuarios pueden
          controlar cómo se utiliza su información personal en la plataforma y
          pueden configurar la privacidad de sus perfiles y publicaciones.
        </Typography>

        <Typography
          variant="body1"
          color="black"
          fontFamily={"Sen"}
          align="Left"
          marginBottom="20px"
        >
          <Typography
            variant="h6"
            fontFamily={"Sen"}
            fontWeight="bold"
            sx={{ display: "inline" }}
          >
            Responsabilidad del usuario:
          </Typography>
          Los usuarios de CodeCuak deben cumplir con todas las leyes aplicables
          y no pueden utilizar la plataforma para fines ilegales o inapropiados.
          Los usuarios son responsables del contenido que publiquen en la
          plataforma y deben respetar los derechos de propiedad intelectual de
          otros usuarios y terceros.
        </Typography>

        <Typography
          variant="body1"
          color="black"
          fontFamily={"Sen"}
          align="Left"
          marginBottom="20px"
        >
          <Typography
        variant="h6"
        fontFamily={"Sen"}
        fontWeight="bold"
        sx={{ display: "inline" }}
      >
        Modificaciones de los términos y condiciones:
      </Typography>
           CodeCuak se reserva el
          derecho de modificar los términos y condiciones en cualquier momento y
          sin previo aviso a los usuarios. Los cambios en los términos y
          condiciones serán efectivos en la fecha en que se publiquen en la
          plataforma y se espera que los usuarios los revisen regularmente.
        </Typography>
      </Box>
    </Box>
  );
};
export default Terminos;
