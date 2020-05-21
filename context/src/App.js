import React from 'react';
import Button from './Button'
// import './App.css';

import {ThemeContext} from './ThemeContext'


function App() {
  return (
    <ThemeContext.Provider value="dark-2">
      <Button></Button>
    </ThemeContext.Provider>
  );
}

export default App;

