// mostly code from https://reactjs.org/docs/error-boundaries.html
import React, { Component } from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  // static method gets called on the class not on the instance - it has to be named like this, this is a lifecycle method
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Got an error: ', error, info);
  }
  // this is for the 5s auto redirect
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click Here</Link>
          {''} to go back or wait 5s.
        </h1>
      );
    }
    // return this is there are no errors - this class acts as a passthrough
    return this.props.children;
  }
}

export default ErrorBoundary;
