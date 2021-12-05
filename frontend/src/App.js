import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import List from './components/List';
import New from './components/New';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <nav>
          <Link to="/list">List mails</Link>
          <Link to="/new">New mail</Link>
          <Link to="/search">Search</Link>
      </nav> 
      <Routes>
        <Route path="/list" element={<List />} />
        <Route path="/new" element={<New />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
