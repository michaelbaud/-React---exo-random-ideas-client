import React, { useState } from 'react'
import '../css/App.css'

// Components
import Searchbar from './Searchbar'
import Filters from './Filters'
import IdeasContainer from './IdeasContainer'
import Footer from './Footer'

const App = () => {

  const [activatedFilter, setActivatedFilter] = useState('idAsc')
  const [input, setInput] = useState('')

  return (
    <div className="App">
      <h1>Listes d'idées</h1>
      <Searchbar input={input} setInput={setInput} />
      <Filters activatedFilter={activatedFilter} setActivatedFilter={setActivatedFilter} />
      <IdeasContainer activatedFilter={activatedFilter} input={input} />
      <Footer />
    </div>
  )
}

export default App
