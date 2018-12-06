import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer.jsx';

class Header extends Component {

    state= {
        drawerOpen: false,
        headerOpaque: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    // use this if you add routes that will lead you away from this page
    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({headerOpaque: true})
        } else {
            this.setState({headerOpaque: false})
        }
    }

    toggleDrawer = (val) => {
        this.setState({
            drawerOpen: val
        })
    }

     render() {
         return (
             <AppBar    position='fixed'
                        style={{
                            backgroundColor:this.state.headerOpaque ? '#2f2f2f': 'transparent',
                            boxShadow: 'none',
                            padding: '10px 0px'
                        }}>
                <ToolBar>
                    <div className='header_logo'>
                        <div className="font_righteous header_logo_venue">The Venue</div>
                        <div className="header_logo_title">Musical Events</div>
                    </div>

                    <IconButton aria-label="Menu"
                                color="inherit"
                                onClick={() => this.toggleDrawer(true)}>
                        <MenuIcon/>
                    </IconButton>

                    <SideDrawer open={this.state.drawerOpen}
                                onClose={val => this.toggleDrawer(val)}/>

                </ToolBar>
             </AppBar>
         );
     }
 }

 // Header.defaultProps = {};
 // Header.propTypes = {
 //     name:        PropTypes.string.isRequired,
 //     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
 //     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
 //     comments:    PropTypes.arrayOf(React.PropTypes.object),
 //     date:        PropTypes.instanceOf(Date)
 // };
 //
 // PropTypes -> array, bool, func, number, object, string, symbol

 // Header.contextTypes = {
 //     router: React.PropTypes.object.isRequired
 // }
 // (lets you do 'this.context.router.push('/wherever');

 export default Header;

 // remember to use 'this' binding now (choose one, #1 is best)
 // 1. In constructor (see constructor above)
 // 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
 // 3. Arrow functions in your render ( onClick={() => {}} )
 // 4. _.bindAll(this,'methodName','...')

 // }