import { Box, Typography, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub, DensityMedium } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1c1f29",
        color: "#fff",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
      }}
      id="footer"
    >
      {/* Top Section: Contact Info */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "800px",
        }}
      >

        {/* Email */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
            }}
          >
            <EmailIcon />
          </IconButton>
          <Typography>alfiyasiddique1708@gmail.com</Typography>
        </Box>

        {/* Social Icons */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
            }}
            href="https://www.linkedin.com/in/alfiyasiddique/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
            }}
           href="https://medium.com/@alfiyasiddique1708"
           target="_blank"
          >
            <DensityMedium />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
            }}
            href="https://github.com/AlfiyaSiddique"
            target="_blank"
          >
            <GitHub />
          </IconButton>
        </Box>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      />

      {/* Bottom Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "800px",
          margin: "auto",
          textAlign:"center"
        }}
      >
        {/* Left Text */}
        <Typography variant="body2" sx={{textAlign: "center"}}>
          © {new Date().getFullYear()} Made with ❤️ by <strong>Alfiya Siddique</strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
