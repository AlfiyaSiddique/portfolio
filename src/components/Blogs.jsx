/* eslint-disable react/prop-types */
import { Card, CardContent, CardMedia, Box, Typography, Button } from "@mui/material";

const Blogs = ({blog}) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "secondary.main", // Dark background color
        color: "#fff",
        padding: "2rem",
        borderRadius: "8px",
        margin: "2rem",
        flexWrap: "wrap"
      }}
      id="blogcard"
    >
      {/* Left Section: Image */}
      <CardMedia
        component="img"
        image={`${blog.img}`} // Replace with your image URL or import
        alt="Business Image"
        sx={{
          width: "120px",
          height: "120px",
          borderRadius: "8px",
          flexShrink: 0,
        }}
      />

      {/* Center Section: Text Content */}
      <CardContent
        sx={{
          flex: 1,
          padding: "0 16px",
        }}
      >
        <Typography variant="caption" sx={{ fontWeight: "bold", display: "block", marginBottom: "4px" }}>
          {blog.tag} - {blog.date}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold", lineHeight: 1.5 }}>
          {blog.title}
        </Typography>
      </CardContent>

      {/* Right Section: Button */}
      <Box>
        <Button
          variant="outlined"
          color="primary"
          href={blog.link}
          target = "_blank"
          endIcon={<span>»</span>}
          sx={{
            borderColor: "#fff",
            color: "#fff",
            textTransform: "none",
            padding: "6px 16px",
            borderRadius: "20px",
            fontWeight: "bold",
            ":hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          Read More
        </Button>
      </Box>
    </Card>
  );
};

export default Blogs;
