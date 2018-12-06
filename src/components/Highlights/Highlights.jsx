import React from 'react';

import Description from './Description.jsx';
import Discount from './Discount.jsx';

const Highlights = ({whatever1, whatever2}) => {

    return (
        <div className="highlight_wrapper">
            <Description/>
            <Discount/>
        </div>
    );
};


// Highlights.defaultProps = {};
// Highlights.propTypes = {
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

export default Highlights;
