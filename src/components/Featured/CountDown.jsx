import React, { Component } from 'react';
import Slide from 'react-reveal/Slide.js';
// import CountDown from './CountDown.jsx';
class CountDown extends Component {

    // constructor(props, context){
    //     super(props, context);
    //     this.state = {
    //         whatever:{}
    //     }
    //    this.handleClick = this.handleClick.bind(this)
    // }

    /////////// ALTERNATIVE 1 - if using create-react-app
    // and you do not need to init the state based on props
    // state = { whatever: false };

    state = {
        deadline: 'Dec, 16, 2018',
        days: '0', hours: '0', minutes: '0', seconds: '0'
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.state.deadline), 1000)
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if (time < 0) {
            console.log('date is passed');
        } else {
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor(time/(1000*60*60*24));
            this.setState({days, minutes, hours, seconds})
        }
    }

    render() {
        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Event starts in
                    </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">{this.state.days}</div>
                            <div className="countdown_tag">Days</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">{this.state.hours}</div>
                            <div className="countdown_tag">Hrs</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">{this.state.minutes}</div>
                            <div className="countdown_tag">Min</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">{this.state.seconds}</div>
                            <div className="countdown_tag">Sec</div>
                        </div>
                    </div>
                </div>
            </Slide>
        );
    }
}

// CountDown.defaultProps = {};
// CountDown.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

// CountDown.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

export default CountDown;

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')

// }