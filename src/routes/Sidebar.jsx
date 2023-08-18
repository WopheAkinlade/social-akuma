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
import { Link } from "react-router-dom";
// For testing purposes: height={300} width={300} bgcolor={"red"}

const menuStyle = {
  height: "inherit",
  width: "inherit",
  display: "flex",
  flexDirection: "column",
  justiyContent: "center",
  alignItems: "center",
  borderRight: "1.7px solid",
  position: "fixed",
};

const iconStyle = {
  color: "black",
  height: "2rem",
  width: "auto",
};

const Sidebar = () => {
  return (
    <Box sx={{ height: "100vh", width: "20rem" }}>
      <Box sx={menuStyle}>
        <Link to={"/home"}>
          <div className="logo-box">
            <h1 className="logo-text">Social Things</h1>
          </div>
        </Link>

        <Box width={"80%"}>
          <List>
            <ListItem sx={{ marginBottom: 5 }} disablePadding>
              <Link to={"/home"}>
                <ListItemButton>
                  <ListItemIcon>
                    <Home sx={iconStyle} />
                  </ListItemIcon>
                  <Typography fontSize={20} fontWeight={500}>
                    Homepage
                  </Typography>
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem sx={{ marginBottom: 5 }} disablePadding>
              <Link to={"/profile"}>
                <ListItemButton>
                  <ListItemIcon>
                    <Person sx={iconStyle} />
                  </ListItemIcon>
                  <Typography fontSize={20} fontWeight={500}>
                    Profile
                  </Typography>
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem sx={{ marginBottom: 5 }} disablePadding>
              <Link to={"/friends"}>
                <ListItemButton>
                  <ListItemIcon>
                    <Group sx={iconStyle} />
                  </ListItemIcon>
                  <Typography fontSize={20} fontWeight={500}>
                    Friends
                  </Typography>
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem sx={{ marginBottom: 5 }} disablePadding>
              <Link to={"/explore"}>
                <ListItemButton>
                  <ListItemIcon>
                    <Explore sx={iconStyle} />
                  </ListItemIcon>
                  <Typography fontSize={20} fontWeight={500}>
                    Explore
                  </Typography>
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem sx={{ marginBottom: 5 }} disablePadding>
              <Link to={"/settings"}>
                <ListItemButton>
                  <ListItemIcon>
                    <Settings sx={iconStyle} />
                  </ListItemIcon>
                  <Typography fontSize={20} fontWeight={500}>
                    Settings
                  </Typography>
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem sx={{ marginBottom: 5 }} disablePadding>
              <Link to={"/messages"}>
                <ListItemButton>
                  <ListItemIcon>
                    <Email sx={iconStyle} />
                  </ListItemIcon>
                  <Typography fontSize={20} fontWeight={500}>
                    Messages
                  </Typography>
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
