import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListingCover.module.css';

import food from '../../assets/img/Food.jpeg';


const ListingCover = () => (
    <div className={styles.ListingCover}>
        <img src={food} alt="BigCo Inc. logo"/>
    </div>


);

ListingCover.propTypes = {};

ListingCover.defaultProps = {};

export default ListingCover;
