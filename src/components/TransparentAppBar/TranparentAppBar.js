import React from "react";
import styles from "./TransparentAppBar.module.scss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  main: {
    background: "transparent",
    boxShadow: "none",
  },
}));

function TransparentAppBar(props) {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.main} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="black"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="black">Login</Button>
        </Toolbar>
      </AppBar>
      <div>{props.children}</div>
    </>
  );
}

export default TransparentAppBar;
