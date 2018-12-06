import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom.js';

import Button from '../UI/Button.jsx';
// import Pricing from './Pricing.jsx';
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!';
const link = 'http://cnn.com';

class Pricing extends Component {

    state = {
        prices: [
            {price:100, position:'Balcony', desc: lorem, linkto: link, delay:500},
            {price:150, position:'Medium', desc: lorem, linkto: link, delay:0},
            {price:250, position:'Star', desc: lorem, linkto: link, delay:500}
        ],
    }

    showBoxes = () => (
        this.state.prices
            .map((p,key) => (
                <Zoom   delay={p.delay}
                        key={key}>
                    <div className='pricing_item'>
                        <div className='pricing_inner_wrapper'>
                            <div className="pricing_title">
                                <span>${p.price}</span>
                                <span>{p.position}</span>
                            </div>
                            <div className="pricing_description">
                                {p.desc}
                            </div>
                            <div className="pricing_buttons">
                                <Button background='#ffa800'
                                        color='white'
                                        link={p.linkto}
                                        text='Purchase'/>
                            </div>
                        </div>
                    </div>
                </Zoom>
            ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

// Pricing.defaultProps = {};
// Pricing.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

// Pricing.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

export default Pricing;

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')

// }