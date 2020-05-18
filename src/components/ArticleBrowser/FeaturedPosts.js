import React from 'react'
import styles from './ArticleBrowser.module.scss'
import logo from "../../logo.svg"
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import '../../globalStyles.scss'

import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
  Grid, 
  Paper,
  Typography,  
  Button
} from "@material-ui/core";

const myStyles = { 
  overlayText: {
    position: "absolute", 
    bottom: "0", 
    color: "white",
    width: "100%", 
    textAlign: "center", 
    background: "linear-gradient(to top, rgba(31,22,203, 0.7), rgba(31,22,203, 0))"
  },
  image: { 
    position: "absolute",
    objectFit: "cover", 
    height: "100%", 
    width: "100%", 
    left: "0", 
    top: "0", 
    background: "#120136"
  }
}

export default function FeaturedPosts() {
  return (
    <div style={{width: "100vw"}}>
      <Grid
      className={styles.container}
      container
      direction="row"
      justify="center"
      alignItems="center"
      >
        <Grid item className={styles.test}> 
          <Paper square className={[styles.paper, styles.topPaper].join(" ")}>
              <img src={logo} style={myStyles.image}/>
              <Typography variant="h4" style={myStyles.overlayText}>Most Important Post</Typography>          
          </Paper>
        </Grid>
        <Grid item>
          <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          spacing={0}
          className={styles.secondaryContainer}>
            <Grid item className={styles.secondary}>
              <Paper square className={styles.paper}>
                <img src={logo} style={myStyles.image}/>
                <Typography variant="h4" style={myStyles.overlayText}>Another Post</Typography> 
              </Paper>
            </Grid>
            <Grid item className={styles.secondary}>
              <Paper square className={styles.paper}>
                <img src={logo} style={myStyles.image}/>
                <Typography variant="h4" style={myStyles.overlayText}></Typography>   
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
