import React from 'react'
import Cards from '../src/Cards'
import Nav from '../src/Nav'
import dataApi from '../src/dataApi'
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
