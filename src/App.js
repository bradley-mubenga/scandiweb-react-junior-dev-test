import React, { Component } from 'react';

//GraphQL & Apollo
import { graphql } from '@apollo/client/react/hoc';
import { getAllProducts } from './graphql/queries';

//React Compponents
import Header from './components/Header';
import CategoryPage from './pages/CategoryPage';

//SCSS
import './assets/scss/_global.scss';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      category: 'clothes',
      currencyIndex: 0
    }
  }

  //
  switchCategory = (categoryType) => {
    this.setState({
      category: categoryType
    })
  }

  //
  switchCurrency = (index) => {
    this.setState({
      currencyIndex: index
    })
  }

  render() {
    const { data } = this.props;

    return this.props.data.loading ? (<h1>Loading</h1>) : (<>
        <Header switchCategory={this.switchCategory} switchCurrency={this.switchCurrency}/>
        <CategoryPage products={this.props.data.category.products} category={this.state.category} currencyIndex={this.state.currencyIndex} />
    </>)
  }
}

//GraphQL HOC Client
export default graphql(getAllProducts)(App);

