import {
  Email,
  Explore,
  Group,
  Home,
  Person,
  Settings,
} from "@mui/icons-material";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
// For testing purposes: height={300} width={300} bgcolor={"red"}

const mainStyle = {
  // position: "fixed",
  height: "100vh",
  width: "20rem",
  display: "flex",
  flexDirection: "column",
  justiyContent: "center",
  alignItems: "center",
  borderRight: "1.7px solid",
};

const iconStyle = {
  color: "black",
  height: "2rem",
  width: "auto",
};

const Sidebar = () => {
  return (
    <Box sx={mainStyle}>
      <div className="logo-box">
        <h1 className="logo-text">Social Things</h1>
      </div>

      <Box width={"80%"}>
        <List>
          <ListItem sx={{ marginBottom: 5 }} disablePadding>
            <ListItemButton component="a" href="/home">
              <ListItemIcon>
                <Home sx={iconStyle} />
              </ListItemIcon>
              <Typography fontSize={20} fontWeight={500}>
                Homepage
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem sx={{ marginBottom: 5 }} disablePadding>
            <ListItemButton component="a" href="#account">
              <ListItemIcon>
                <Person sx={iconStyle} />
              </ListItemIcon>
              <Typography fontSize={20} fontWeight={500}>
                Profile
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem sx={{ marginBottom: 5 }} disablePadding>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
                <Group sx={iconStyle} />
              </ListItemIcon>
              <Typography fontSize={20} fontWeight={500}>
                Friends
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem sx={{ marginBottom: 5 }} disablePadding>
            <ListItemButton component="a" href="#explore">
              <ListItemIcon>
                <Explore sx={iconStyle} />
              </ListItemIcon>
              <Typography fontSize={20} fontWeight={500}>
                Explore
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem sx={{ marginBottom: 5 }} disablePadding>
            <ListItemButton component="a" href="#settings">
              <ListItemIcon>
                <Settings sx={iconStyle} />
              </ListItemIcon>
              <Typography fontSize={20} fontWeight={500}>
                Settings
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem sx={{ marginBottom: 5 }} disablePadding>
            <ListItemButton component="a" href="#messages">
              <ListItemIcon>
                <Email sx={iconStyle} />
              </ListItemIcon>
              <Typography fontSize={20} fontWeight={500}>
                Messages
              </Typography>
            </ListItemButton>
          </ListItem>

        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
