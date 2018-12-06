import React from 'react';


const Location = ({whatever1, whatever2}) => {

    return (
        <div className="location_wrapper">

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105752.5679400709!2d-118.44827994179684!3d34.075467499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2beb34bc23abd%3A0xa06f7a6456560d46!2sApple+Beverly+Center!5e0!3m2!1sen!2sus!4v1544058566450"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen >
            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};


// Location.defaultProps = {};
// Location.propTypes = {
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

export default Location;
