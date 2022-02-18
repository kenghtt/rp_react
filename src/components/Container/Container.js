import React from 'react';
import styles from './Container.module.css';
import Logo from "../Logo/Logo";
import Calendar from "../Calendar/Calendar";

const Container = () => (
  <div className={styles.Container}>

      <Logo></Logo>
      <Calendar></Calendar>

  </div>
);

Container.propTypes = {};

Container.defaultProps = {};

export default Container;
