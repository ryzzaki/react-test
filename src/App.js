import React from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';

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
    <div>
      <h1 id="some-id">Eat Me!</h1>
      <SearchParams />
    </div>
  );
};

// render(React.createElement(App), document.getElementById('root'));
render(<App />, document.getElementById('root'));
