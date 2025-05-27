import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetter from './components/WrongLetter'; 
import Word from './components/Word';
import Alert from './components/Alert';
import Message from './components/Message';

const words = ['react', 'vite', 'coding', 'vscode', 'javascript', 'html', 'css', 'python', 'java', 'php', 'ruby', 'swift', 'kotlin', 'rust', 'dart', 'elixir', 'haskell', 'julia', 'matlab', 'perl', 'ruby', 'rust', 'scheme', 'shell',  'swift', 'typescript', 'webassembly'];

let playable = true;

const correctLetters = [];
const wrongLetter = [];

function App() {
  const [selectedWord, setSelectedWord] = useState('');
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  useState(() => {
    const random = words[Math.floor(Math.random() * words.length)];
    setSelectedWord(random);
  }, []);

useEffect(() => {
  const handleKeydown = event => {
    const { key, keyCode } = event;


		if (playable && keyCode >= 65 && keyCode <= 90) {
			const letter = key.toLowerCase();

			if (selectedWord.includes(letter)) {
				if (!correctLetters.includes(letter)) {
					setCorrectLetters(currentLetters => [...currentLetters, letter]);
				} else {
					//showNotification();
				}
			} else {
				if (!wrongLetters.includes(letter)) {
        		setWrongLetters(wrongLetter => [...wrongLetter, letter]);

					updateWrongLettersEl();
				} else {
					//showNotification();
				}
			}
		}
	}
  window.addEventListener('keydown', handleKeydown);

  return () => window.removeEventListener('keydown', handleKeydown);
},[correctLetters, wrongLetters, playable]);  
  

  return (
    <>
      <Header />
      <div className ="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetter wrongLetter={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>

      {/* <Message />
      <Alert />
       */}
    </>
  )
}

export default App
