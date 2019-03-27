import React, { Component } from 'react';
import MyButton from '../UI/MyButton';
import Zoom from 'react-reveal/Zoom';
class Pricing extends Component {
    state =  {
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ',
            'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
            'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur s'   
        ],
        linkto: ['http//:sales/b', 'http://sales/c', 'http://sales/d'],
        delay: [500, 0, 500]
    }

    showBoxes = () => (
        this.state.prices.map((box,i) => (
            <Zoom delay= {this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                        </div>
                        <div className="pricing_description">
                            <span>${this.state.desc[i]}</span>
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#fffff"
                                link={this.state.linkto[i]}
                            />
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

export default Pricing;