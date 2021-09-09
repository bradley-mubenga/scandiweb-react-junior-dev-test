import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <>
                <button 
                    className="" 
                    onClick={() => this.props.handleCart(!this.props.click)}
                >S</button>
                
                <ul
                    className={this.props.click ? "dropdownMenu show" : "dropdownMenu"}
                >
                    <li onClick={() => this.props.handleCart(false)}>Shopping Cart</li>
                </ul>   
            </>
        )
    }
}
