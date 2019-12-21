import React, { useState, lazy, Suspense } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import ThemeContext from './ThemeContext';

// Dynamically use these when they are needed
const Details = lazy(() => import('./Details'));
const SearchParams = lazy(() => import('./SearchParams'));

const App = () => {
  const themeHook = useState('peru');
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Eat Me!</Link>
          </header>
          {/* use Suspense to fallback if the component has not loaded yet */}
          {/* code splitting should be used for JS that's 30kb+, doing it here is redundant and slower */}
          {/* when it bubbles up, it will always hit the closest Suspense */}
          {/* Facebook uses Suspense everywhere */}
          <Suspense fallback={<h1>Loading route...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

// render(React.createElement(App), document.getElementById('root'));
render(<App />, document.getElementById('root'));
