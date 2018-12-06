import React from 'react';
import Carousel from './Carousel.jsx';
import CountDown from './CountDown.jsx';

const styles = {
    position:'relative'
}

const Featured = () => {

    return (
        <div style={styles}>

            <Carousel/>

            <div className="artist_name">
                <div className="wrapper">
                    Arianna Grande
                </div>
            </div>

            <CountDown/>

        </div>
    );
};

export default Featured;
