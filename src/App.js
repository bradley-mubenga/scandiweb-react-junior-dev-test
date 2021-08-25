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
      products: []
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        products: this.props.data.category.products
      })
    }, 5000)
  }

  render() {
    const { data } = this.props;

    return (
      <>
        <Header />
        <CategoryPage products={this.state.products}/>

        {this.props.data.loading ? (<h1>Loading</h1>) : (<h1>Done</h1>)}
      </>
    )
  }
}

//GraphQL HOC Client
export default graphql(getAllProducts)(App);

