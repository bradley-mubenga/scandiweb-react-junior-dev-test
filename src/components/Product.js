import React, { Component } from 'react';

import { connect } from 'react-redux';

class Product extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.shop
    }
}

export default connect(mapStateToProps)(Product);
