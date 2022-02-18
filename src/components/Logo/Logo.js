import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.css';
// import logo from '../assets/img/logo.svg'
import logo from '../../assets/img/logo1.svg'

// const Logo = () => (
//   <div className={styles.Logo}>
//     Logo Component
//   </div>
// );


function Logo(props) {
    return (
        <div className={styles.Logo}>
            {/*Logo Component 123*/}
            {/*<img src={logo} alt="Logo" />;*/}

            {/*<nav className="navbar navbar-light bg-light">*/}
            <nav className="navbar  ">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo"/>
                    </a>
                </div>
            </nav>
        </div>

    )


}


Logo.propTypes = {};

Logo.defaultProps = {};

export default Logo;
