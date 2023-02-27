import { Box, Typography } from "@mui/material";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {

  return (
    <Box width="100%" m="0 30px" >
      <Box display="flex" justifyContent="space-beetween" alignItems="center">
        <Box>
          {icon}
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: "#1E8449" }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h6" sx={{ color: "#1E8449" }}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
