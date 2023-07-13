import { Home } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
// For testing purposes: height={300} width={300} bgcolor={"red"}

const mainStyle = {
  paddingTop: 5,
  height: "100vh",
  width: "20rem",
  display: "flex",
  flexDirection: "column",
  justiyContent:"center",
  alignItems: "center",
}

const Sidebar = () => {

  return (
    <Box sx={mainStyle}>
      <div className="logo-box">
        <h1 className="logo-text">Social Things</h1>
      </div>

      <Box width={"80%"} mt={"0.5rem"}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
