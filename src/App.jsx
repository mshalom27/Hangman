import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters'; 
import Word from './components/Word';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className ="game-container">
        <Figure />
        <WrongLetters />
        <Word />
      </div>
      
    </>
  )
}

export default App
