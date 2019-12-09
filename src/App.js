import React from 'react';
import { render } from 'react-dom';

const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed),
  ]);
};

const App = () => {
  return React.createElement('div', { id: 'some-id' }, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Dog 1',
      animal: 'Dog',
      breed: 'Dog Breed',
    }),
    React.createElement(Pet, {
      name: 'Cat 1',
      animal: 'Cat',
      breed: 'Cat Breed',
    }),
    React.createElement(Pet, {
      name: 'Turtle 1',
      animal: 'Turtle',
      breed: 'Turtle Breed',
    }),
  ]);
};

render(React.createElement(App), document.getElementById('root'));
