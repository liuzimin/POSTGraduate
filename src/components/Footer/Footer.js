import React from "react";
import styles from "./Footer.module.scss";
import Typography from "@material-ui/core/Typography";

function Footer() {
  return (
    <div className={styles.main}>
      <Typography className={styles.text}>This is the footer</Typography>
    </div>
  );
}

export default Footer;
