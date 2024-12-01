import { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

const underlineAnimation = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 30%;
  }
`;

// eslint-disable-next-line react/prop-types
const SectionTitle = ({ title }) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        margin: "50px 0",
        position: "relative",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
        }}
        
      >
        {title}
      </Typography>

      {/* Underline */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-10px",
          left: "15%",
          transform: "translateX(-50%)",
          height: "5px",
          backgroundColor: title == 'Projects'? '#fff' : "secondary.main",
          width: isInView ? "30%" : "0%",
          animation: isInView ? `${underlineAnimation} 1s ease forwards` : "none",
          transition: "width 0.5s",
        }}
      />
    </Box>
  );
};

export default SectionTitle
