import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import logo from "../../logo.svg"
import { Grid, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
   // justifyContent: 'space-around',
    alignContent: "center",
    overflow: 'hidden',
    background: "white",
    flexDirection: "column"
  },
  gridList: {
    flexWrap: 'nowrap',
    backgroundColor: "white",
   // overflow: "auto",
   // padding: "10px",
    margin: "10px",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    //transform: 'translateZ(0)',
    width: "70%"
  },
  title: {
    color: "white",
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const tileData = [
  {
    img: logo, 
    title: "Post #1", 
    author: "salik"
  }, 
  {
    img: logo, 
    title: "CSCA48", 
    author: "salik"
  },
  {
    img: logo, 
    title: "Another Post", 
    author: "salik"
  },
  {
    img: logo, 
    title: "MATA22", 
    author: "salik"
  },
  {
    img: logo, 
    title: "LaAAA", 
    author: "salik"
  },
  {
    img: logo, 
    title: "LaAAA", 
    author: "salik"
  }
]

export default function PopularPosts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" align="center" style={{margin: "10px"}}>Most Popular Posts</Typography>
      <GridList className={classes.gridList} cols={3.75} spacing={20} style={{margin: "0px", marginBottom: "10px"}}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} style={{backgroundColor: "black", marginRight: "10px"}}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              //actionIcon={
                // <IconButton aria-label={`star ${tile.title}`}>
                //   <StarBorderIcon className={classes.title} />
                // </IconButton>
              //}
            />
          </GridListTile>
        ))}
      </GridList>
      
    </div>
  );
}
