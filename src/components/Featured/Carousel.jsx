import React from 'react';
import Slider from 'react-slick';

import slide_1 from '../../resources/images/slide_1.jpg';
import slide_2 from '../../resources/images/slide_2.jpg';
import slide_3 from '../../resources/images/slide_3.jpg';

const Carousel = ({whatever1, whatever2}) => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }

    return (
        <div    className="carousel_wrapper"
                style={{
                    height: `${window.innerHeight}px`,
                    overflow: 'hidden'
                }}>

            <Slider {...settings}>
                <div>
                    <div    className='carousel_image'
                            style={{
                                background:`url(${slide_1})`,
                                height: `${window.innerHeight}px`
                            }}>
                    </div>
                </div>
                <div>
                    <div    className='carousel_image'
                            style={{
                                background:`url(${slide_2})`,
                                height: `${window.innerHeight}px`
                            }}>
                    </div>
                </div>
                <div>
                    <div    className='carousel_image'
                            style={{
                                background:`url(${slide_3})`,
                                height: `${window.innerHeight}px`
                            }}>
                    </div>
                </div>

            </Slider>

        </div>
    );
};


// Carousel.defaultProps = {};
// Carousel.propTypes = {
//     name:        PropTypes.string.isRequired,
//     hndleIptChg: PropTypes.func,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({
//          title: PropTypes.string.isRequired,
//          text: PropTypes.string.isRequired
//     }).isRequired,
//     comments:    PropTypes.arrayOf(PropTypes.object),
//     todos:       PropTypes.array,
//     isComplete:  PropTypes.bool,
//     id:          PropTypes.number,
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

export default Carousel;
