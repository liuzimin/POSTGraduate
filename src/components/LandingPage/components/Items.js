import React from "react";
import "../css/styles.css"

export default function Items(props) {
  if (props.clicked) {
    return <div className="item clicked"></div>;
  } else {
    return <div className="item"></div>;
  }
}
