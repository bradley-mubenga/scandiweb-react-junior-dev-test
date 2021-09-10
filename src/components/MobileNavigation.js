import React, { Component } from 'react';

//React Router
import { Link } from 'react-router-dom';

//Images
import menu from '../assets/images/menu.png';
import cancel from '../assets/images/cancel.png';

export default class MobileNavigation extends Component {
    render() {
        return (
            <div className="navigationMobile">
                <div className="menuWrapper"
                onClick={() => this.props.handleMobile(!this.props.mobile)}
                >
                    <img src={menu} alt="filter" width="35px"/>
                </div>

                <div className={
                    this.props.mobile ? "mobileNavigation showMobile" : "mobileNavigation"
                    }>
                <div className="closeWrapper"
                onClick={() => this.props.handleMobile(!this.props.mobile)}
                >
                    <img src={cancel} alt="filter" width="25px"/>
                </div>
                    <div>
                        <h5>Shopping Cart</h5>
                    </div>
                    
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className={(this.props.category === 'all') ? "active" : ""}
                                onClick={() => {
                                    this.props.switchCategory('all')
                                    this.props.handleMobile(!this.props.mobile)
                                }}
                            >ALL</Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className={(this.props.category === 'tech') ? "active second" : "second"}
                                onClick={() => {
                                    this.props.switchCategory('tech')
                                    this.props.handleMobile(!this.props.mobile)
                                }}
                            >TECH</Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className={(this.props.category === 'clothes') ? "active" : ""}
                                onClick={() => {
                                    this.props.switchCategory('clothes')
                                    this.props.handleMobile(!this.props.mobile)
                                }}
                            >CLOTHES</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
