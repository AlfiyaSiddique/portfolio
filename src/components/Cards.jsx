/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  CheckCircleOutline,
  DescriptionOutlined,
  DesignServicesOutlined,
  StorageOutlined,
} from "@mui/icons-material";

// eslint-disable-next-line react/prop-types
const Cards = ({ skill }) => {
  return (
    <Card
      sx={{ maxWidth: 345, backgroundColor: "secondary.main", color: " #fff" }}
    >
      <CardHeader
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minWidth: "400px"
        }}
        title={
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            {skill.icon === 1 ? (
              <DesignServicesOutlined
                sx={{ fontSize: 50, color: "primary.main" }}
              />
            ) : skill.icon === 2 ? (
              <StorageOutlined sx={{ fontSize: 50, color: "primary.main" }} />
            ) : (
              <DescriptionOutlined
                sx={{ fontSize: 50, color: "primary.main" }}
              />
            )}
          </Box>
        }
      />
      <CardContent>
        <List>
          {skill.skills.map((s, index) => {
            return (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircleOutline color="primary" />
                </ListItemIcon>
                <ListItemText primary={s} />
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default Cards;
