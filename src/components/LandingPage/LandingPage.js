import "./css/styles.css";
import Item from "./components/Items";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { orange } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";

import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

export class LandingPage extends Component {
  state = {
    clicked: [true, false, false],
    title_o: "Discover".toUpperCase(),
    title_w: "Legends of Runeterra".toUpperCase(),
    body:
      "Mobalytics is your personal gaming companion that will help you explore the world of Runeterra and discover cool decks.",
  };

  click = (index) => {
    var temp = [false, false, false];
    temp[index] = true;
    this.setState({ clicked: temp });
    if (index === 0) {
      this.setState({ title_o: "Discover".toUpperCase() });
      this.setState({ title_w: "Legends of Runeterra".toUpperCase() });
      this.setState({
        body:
          "Mobalytics is your personal gaming companion that will help you explore the world of Runeterra and discover cool decks.",
      });
    } else if (index === 1) {
      this.setState({ title_o: "Get Better".toUpperCase() });
      this.setState({ title_w: "at League of Legends".toUpperCase() });
      this.setState({
        body:
          "Mobalytics is your personal gaming assistant that will help you master Summoner’s Rift and be great.",
      });
    } else {
      this.setState({ title_o: "Get Better".toUpperCase() });
      this.setState({ title_w: "at Teamfight Tactics".toUpperCase() });
      this.setState({
        body:
          "Mobalytics is your personal gaming assistant that will help you build the best team compositions and claim victory.",
      });
    }
  };

  render() {
    const ColorButton = withStyles((theme) => ({
      root: {
        color: theme.palette.getContrastText(orange[500]),
        backgroundColor: orange[500],
        "&:hover": {
          backgroundColor: orange[700],
        },
      },
    }))(Button);

    return (
      <div className="background">
        <Grid container spacing={3}>
          <div className="header">
            {this.state.clicked.map((values, index) => (
              <div onClick={() => this.click(index)}>
                <Item id={index} clicked={this.state.clicked[index]}></Item>
              </div>
            ))}
            <div className="desc">
              <div className="title_o">{this.state.title_o}</div>
              <div className="title_w">{this.state.title_w}</div>
              <div className="body">{this.state.body}</div>
              <ColorButton variant="contained"
                color="primary"
                className="button"
              >
                EXPLORE
              </ColorButton>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
