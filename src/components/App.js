import React from 'react'
import Cards from './Cards'
import Nav from './Nav'
import dataApi from './dataApi'
function App() {
  const dataElements = dataApi.map(data => {
    return (
      <Cards />
    )
  })
  return (
    <>
    <Nav />
    {dataElemets}
    </>
    
  );
}

export default App;
