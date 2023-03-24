import React from 'react'
import Cards from '../src/components/Cards'
import Nav from '../src/components/Nav'
import dataApi from '../src/dataApi'

function App() {
  const dataElements = dataApi.map(data => {
    return (
      <Cards
      key = {data.id}
      data = {data}
      />
    )
  })
  return (
    <div className='main w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
    <Nav />
    {dataElements}
    </div>
    
  );
}

export default App;
