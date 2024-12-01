import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import { Box, Typography } from "@mui/material";
import SpecialSkills from "../components/Specialskill";
import Projects from "../components/Projects"
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import animation from "../assets/animation.gif"
import {Skills} from "../data/Skills.js"
import {SpecialSkills as Sskill} from "../data/SpecialSkill.js"
import {Projects as app} from "../data/Projects.js"
import {Blogs as articles} from "../data/Blogs.js"
import Work from "../components/Work.jsx";

const Home = () => {
    return (
      <section>
      <Navbar/>
      <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4rem",
        flexWrap: "wrap", 
        // backgroundImage: `url(${bg})`,
        background: 'linear-gradient(135deg, #f9f9f9 25%, #e6e6e6 25%, #e6e6e6 50%, #f9f9f9 50%, #f9f9f9 75%, #e6e6e6 75%)',
        backgroundSize: 'cover',
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        gap: "2rem",
      }}
      id="Home"
    >
      {/* Text Section */}
      <Box sx={{ flex: 1, minWidth: "300px" }}>
        <Typography
          sx={{
            fontSize: "5rem",
            fontWeight: "bold",
            color: "secondary.main",
          }}
        >
          Hello! I am
        </Typography>
        <Typography
          sx={{
            fontSize: "5rem",
            fontWeight: "bold",
            color: "secondary.main",
          }}
        >
          Alfiya Siddique
        </Typography>
      </Box>

      {/* GIF Section */}
      <Box
        sx={{
          flex: 1,
          minWidth: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={animation} // Replace with your GIF path
          alt="Animated GIF"
          style={{
            width: "100%",
            maxWidth: "1500px", // Set a maximum width for responsiveness
            borderRadius: "8px", // Optional: Adds rounded corners
          }}
        />
      </Box>
    </Box>

       <Box sx={{margin: "4rem",}} id="Skills">
       <SectionTitle title={"Skills"}/>
       <Box sx={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
          {Skills.map((item, index)=>{
              return <Cards key={index} skill={item}/>
          })}
        </Box>
       </Box>

       <Box sx={{margin: "4rem"}} id="special Skills">
       <SectionTitle title={"Special Skills"}/>
       <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "4rem",
        flexWrap: "wrap", // Ensures it wraps on smaller screens
        gap: "2rem",
      }}
    >
      {/* Text Section */}
      <Box sx={{ flex: 1, minWidth: "300px" }}>
        <Typography
          sx={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "secondary.main",
          }}
        >
         My Special Field
        </Typography>
        <Typography
          sx={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "secondary.main",
          }}
        >
         Skills Here
        </Typography>
      </Box>

      {/* GIF Section */}
      <Box
        sx={{
          flex: 1,
          minWidth: "300px",
        }}
      >
        {Sskill.map((skill, index)=>{
          return <SpecialSkills key={index} skill = {skill}/>
        })}
      </Box>
    </Box>
       </Box>

       <Box sx={{ padding: "4rem", backgroundColor: "secondary.main", color: "#fff"}} id="Projects">
       <SectionTitle title={"Projects"}/>
        <Box sx={{display: "flex", justifyContent: "space-around", gap: "30px", position: "relative"}} id="projectcard">
            {app.map((webapp, index)=>{
              return <Projects key={index} app={webapp} />
            })

            }
            </Box>
       </Box>

       <Box sx={{ margin: "7rem"}} id="Blog">
       <SectionTitle title={"Blogs"}/>
          {articles.map((art, index)=>{
            return <Blogs key={index} blog={art}/>
          })}
       </Box>

       <Box sx={{ margin: "7rem"}} id="experience">
       <SectionTitle title={"Work Experience"}/>
        <Work/>
       </Box>
       <Footer/>
      </section>
    );
  };
  
  export default Home;
  