import React, { Component } from 'react';

//React Router
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/" onClick={() => this.props.switchCategory('all')}>All</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => this.props.switchCategory('tech')}>Tech</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => this.props.switchCategory('clothes')}>Clothes</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
