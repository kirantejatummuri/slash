import React, { useContext } from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AppContext } from "../header/AppContext";
import NavigationDrawer from "./NavigationDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  title: {
    flexGrow: 1
  }
}));

export default function Navigation() {
  const classes = useStyles();
  const context = useContext(AppContext);

  return (
    <div className={classes.root}>
      <NavigationDrawer />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={context.toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            SLASH
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
