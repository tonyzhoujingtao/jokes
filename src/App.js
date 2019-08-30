import React from 'react';
import logo from './logo.svg';
import './App.css';

import Joke from "./Joke"

import jokes from "./jokes"

function App() {
  const jokeComponents = jokes.map(
    joke => <Joke key={joke.id} name={joke.name} content={joke.content} />
  )

  return (
    <div>
      {jokeComponents}
    </div>
  );
}

export default App;
