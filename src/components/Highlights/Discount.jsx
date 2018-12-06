import React, { Component } from 'react';
import Fade from 'react-reveal/Fade.js';
import Slide from 'react-reveal/Slide.js';

import Button from '../UI/Button.jsx';

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }

    percentage = () => {
        let {discountStart, discountEnd} = this.state;
        if (discountStart < discountEnd) {
            this.setState({discountStart: discountStart + 1});
        }
    }

    componentDidUpdate(prevProps, prevState, prevContext) {
        setTimeout(() => this.percentage(), 30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade onReveal={() => this.percentage()}>
                        <div className="discount_percentage">
                            <span>{this.state.discountStart}%</span>
                            <span>Off</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase Tickets before June 20th</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deleniti esse, ex excepturi facilis hic inventore itaque natus odit, ratione rerum sed temporibus. Fugiat ipsa iusto molestiae numquam qui recusandae?</p>

                            <Button text='Purchase Tickets'
                                    background='#ffa800'
                                    color='#fff'
                                    link='http://google.com'/>

                        </div>
                    </Slide>

                </div>
            </div>
        );
    }
}

// Discount.defaultProps = {};
// Discount.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

// Discount.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

export default Discount;

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')

// }