import React, { Component } from 'react'

export default class CurrencySelector extends Component {
    render() {
        return (
            <>
                <button 
                    className="" 
                    onClick={() => this.props.handleCurrency(!this.props.click)}
                >S</button>

                <ul 
                    className={this.props.click ? "dropdownMenu show" : "dropdownMenu"}
                >
                    <li onClick={() => this.props.handleCurrency(false)}>Currency</li>
                </ul>   
            </>
        )
    }
}
