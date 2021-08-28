import React, { Component } from 'react'

export default class ErrorBoundaryFallback extends Component {
  state = {
    error: null,
    errInfo: null
  }

  componentDidCatch(err, errInfo){
    this.setState({
      error: err,
      errInfo: errInfo
    })

    // look into some error logging / reporting service
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
