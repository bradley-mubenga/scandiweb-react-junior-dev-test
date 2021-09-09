import React, { Component } from 'react';

//Images
import dollarSign from '../assets/images/dollar-sign.png';
import chevron from '../assets/images/chevron.png';

export default class CurrencySelector extends Component {
    render() {
        return (
            <>
                <div 
                    className="currencySelector" 
                    onClick={() => this.props.handleCurrency(!this.props.click)}
                > 
                    <img className="dollarSign" src={dollarSign} alt="chevron" />
                    <img className="chevron" src={chevron} alt="chevron" />
                </div>

                <ul 
                    className={this.props.click ? "dropdownMenu show" : "dropdownMenu"}
                >
                    <li onClick={() => this.props.handleCurrency(false)}>Currency</li>
                </ul>   
            </>
        )
    }
}
