import { useState } from 'react'
import Header from './Header'
import Content from './Content'
import './Main.css'

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Content />
      </main>
    </div>
  )
}

export default App
