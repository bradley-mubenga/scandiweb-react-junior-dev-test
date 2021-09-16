import React, { Component } from 'react';

//SCSS
import '../assets/sass/header.scss';

//Components
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            currencyClick: false,
            cartClick: false,
            mobile: false
        };
    }

    handleCart = (state) => {
        this.setState({
            currencyClick: false,
            cartClick: state,
        });
    }

    handleCurrency = (state) => {
        this.setState({
            currencyClick: state,
            cartClick: false
        });
    }

    handleMobile = (state) => {
        this.setState({
            mobile: state
        });
    }

    componentDidUpdate(){
    }

    render() {
        return (
            <nav>
                <div className="navigationWrapper">
                    <DesktopNavigation
                        category={this.props.category}
                        switchCategory={this.props.switchCategory}
                        click={this.state.currencyClick}
                        handleCurrency={this.handleCurrency}
                        cartClick={this.state.cartClick}
                        handleCart={this.handleCart}
                    />

                    <MobileNavigation 
                        mobile={this.state.mobile}
                        handleMobile={this.handleMobile}
                        category={this.props.category}
                        switchCategory={this.props.switchCategory}
                    />
                </div>
            </nav>
        )
    }
}
