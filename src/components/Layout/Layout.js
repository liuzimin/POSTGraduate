import React from "react";
import styles from "./Layout.module.scss";
import TransparentAppBar from "../TransparentAppBar/TranparentAppBar";
import Footer from "../Footer/Footer";

function Layout(props) {
  return (
    <>
      <TransparentAppBar></TransparentAppBar>
      <div>{props.children}</div>
      <Footer className={styles.main}></Footer>
    </>
  );
}

export default Layout;
