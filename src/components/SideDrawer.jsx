import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {scroller} from 'react-scroll';


const SideDrawer = ({open, onClose}) => {

    const scrollToElement = (el) => {
        scroller.scrollTo(el, {
            duration: 1500,
            delay: 100,
            offset: -150,
            smooth: true
        })
        // closes drawer
        onClose(false)
    }

    return (
        <Drawer     anchor="right"
                    open={open}
                    onClose={() => onClose(false)}
                    className="side-drawer">
            <List component='nav'>
                <ListItem   button
                            onClick={() => scrollToElement('Featured')}>
                    Event starts in...
                </ListItem>
                <ListItem   button
                            onClick={() => scrollToElement('VenueInfo')}>
                    Venue NFO
                </ListItem>
                <ListItem   button
                            onClick={() => scrollToElement('Highlight')}>
                    Highlights
                </ListItem>
                <ListItem   button
                            onClick={() => scrollToElement('Pricing')}>
                    Pricing
                </ListItem>
                <ListItem   button
                            onClick={() => scrollToElement('Location')}>
                    Location
                </ListItem>
            </List>

        </Drawer>
    );
};


// SideDrawer.defaultProps = {};
// SideDrawer.propTypes = {
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

export default SideDrawer;
