/* eslint-disable react/prop-types */
import { Box, Typography, LinearProgress } from "@mui/material";

const SpecialSkills = ({skill}) => {
  const progressValue = skill.percent; // Percentage of the load bar

  return (
    <Box
      sx={{
        width: "80%", // Adjust as needed
        margin: "auto",
        mt: 5,
        p: 2,
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#e6e6e6",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <Typography
        variant="h6"
        sx={{fontFamily: "", mb: 2, fontWeight: "bold" }}
      >
        {skill.title}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progressValue}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: "#fff",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#3f51b5",
          },
        }}
      />
      <Typography
        variant="body2"
        sx={{ textAlign: "center", mt: 1 }}
      >
        {progressValue}%
      </Typography>
    </Box>
  );
};

export default SpecialSkills;
