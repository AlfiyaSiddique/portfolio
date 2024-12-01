/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import project from "../assets/Project.png";
const Projects = ({app}) => {
  const handleClick = (link) => {
    window.location.href = link
  };

  return (
    <Box sx={{  width: "50%",
          height: "450px"}}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* Background with opacity applied */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${project})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5, 
            zIndex: 1,
          }}
        />

        {/* Content Box */}
        
        <Box
        onClick={()=>handleClick(app.link)}
          sx={{
            position: "relative",
            borderRadius: "2%",
            width: "70%",
            height: "90%",
            cursor: "pointer",
            backgroundImage: `url(${app.img})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: 2, // Content stays above the background
          }}
        ></Box>
      </Box>
      <Typography variant="h3" >{app.title}</Typography>
      <Typography variant="h4">{app.description}</Typography>
      <Typography variant="h5">{app.techstack}</Typography>
    </Box>
  );
};

export default Projects;
