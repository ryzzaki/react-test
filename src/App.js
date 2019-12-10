import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import SearchParams from './SearchParams';
import Details from './Details';

const App = () => {
  // return React.createElement('div', { id: 'some-id' }, [
  //   React.createElement('h1', {}, 'Adopt Me!'),
  //   React.createElement(Pet, {
  //     name: 'Dog 1',
  //     animal: 'Dog',
  //     breed: 'Dog Breed',
  //   }),
  //   React.createElement(Pet, {
  //     name: 'Cat 1',
  //     animal: 'Cat',
  //     breed: 'Cat Breed',
  //   }),
  //   React.createElement(Pet, {
  //     name: 'Turtle 1',
  //     animal: 'Turtle',
  //     breed: 'Turtle Breed',
  //   }),
  // ]);
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Eat Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

// render(React.createElement(App), document.getElementById('root'));
render(<App />, document.getElementById('root'));
