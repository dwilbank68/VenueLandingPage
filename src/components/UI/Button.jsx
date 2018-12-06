import React from 'react';
import ButtonMUI from '@material-ui/core/Button';
import TicketIcon from '../../resources/images/icons/ticket.png';

const Button = ({background, color, link, text}) => {

    return (
        <div className="button">
            <ButtonMUI  href={link}
                        variant='contained'
                        size='small'
                        style={{ background, color }}>
                <img    src={TicketIcon}
                        className='iconImage'
                        alt='icon_button'/>
                {text}
            </ButtonMUI>
        </div>
    );
};


// Button.defaultProps = {};
// Button.propTypes = {
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

export default Button;
