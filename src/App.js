import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Stack from './components/Stack';
import Work from './components/Work';
import Work2 from './components/Work2';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Work />
      <Work2 />
      <Stack />
      <Contact />
    </>
  );
}

export default App;
