import React, {useState} from 'react';
import styles from './Container.module.css';
import Logo from "../Logo/Logo";
import Calendar from "../Calendar/Calendar";
import ListingTitle from "../ListingTitle/ListingTitle";
import ListingBody from "../ListingBody/ListingBody";
import ListingCover from "../ListingCover/ListingCover";


function Container() {
    const [displayTitle, setDisplayTitle] = useState("none");
    const [displayBody, setDisplayBody] = useState("none");


    function enable(){

        setDisplayTitle("");
        setDisplayBody("");


    }

    function disable(){
        setDisplayTitle("none");
        setDisplayBody("none");
    }

    return (
        <div className={styles.Container}>


            <Logo/>


            <div className="container">
                <div className="row">
                    <div className="col">
                        <ListingTitle display={displayTitle}/>
                        <ListingCover></ListingCover>
                        <ListingBody display={displayBody}/>
                        Column

                    </div>
                </div>
            </div>

            <button onClick={enable}> RESERVE NOW</button>
            <button onClick={disable}> DISABLE</button>
            {/*<Calendar display="none"/>*/}
            <Calendar display={displayBody}/>


        </div>
    )
}





// const Container = () => (
//
//
//
// );

Container.propTypes = {};

Container.defaultProps = {};

export default Container;
