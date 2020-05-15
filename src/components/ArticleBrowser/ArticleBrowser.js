import React from 'react'
import styles from './ArticleBrowser.module.scss'
import logo from "../../logo.svg"
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
  Grid, 
  Paper, 
  Button
} from "@material-ui/core";





export default function ArticleBrowser() {
  
  return (
    <div className={styles.root}>
      <Grid
        className={styles.container}
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
        
      >
        <Grid item className={styles.test}> 
          <Paper square className={[styles.paper, styles.topPaper].join(" ")}>FIRST</Paper>
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
              <Paper square className={styles.paper}>SALK</Paper>
            </Grid>
            <Grid item className={styles.secondary}>
              <Paper square className={styles.paper}>SALik</Paper>
            </Grid>
          </Grid>
        </Grid>

        
      </Grid>
    </div>
    
  )
}
