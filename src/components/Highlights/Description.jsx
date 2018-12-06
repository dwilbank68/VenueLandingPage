import React from 'react';
import Fade from 'react-reveal/Fade.js';

// import Description from './Description.jsx';
// const Description = (props) => {
const Description = ({whatever1, whatever2}) => {


    return (
        <Fade>
            <div className="center_wrapper">
                <h2>Highlights</h2>
                <div className="highlight_description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores debitis dolore eos error excepturi expedita explicabo, fuga fugit neque numquam quos ratione recusandae sequi tempora tenetur totam ut vitae.
                </div>
            </div>
        </Fade>

    );
};


// Description.defaultProps = {};
// Description.propTypes = {
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

export default Description;
