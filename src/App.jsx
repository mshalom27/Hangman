import { useState, useEffect, useRef } from 'react'
import './App.css'
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetter from './components/WrongLetter'; 
import Word from './components/Word';
import Alert from './components/Alert';
import Message from './components/Message';
import show from './helpers/helpers';

const words = ['react', 'vite', 'coding', 'vscode', 'javascript', 'html', 'css', 'python', 'java', 'php', 'ruby', 'swift', 'kotlin', 'rust', 'dart', 'elixir', 'haskell', 'julia', 'matlab', 'perl', 'ruby', 'rust', 'scheme', 'shell',  'swift', 'typescript', 'webassembly'];

let playable = true;

const correctLetters = [];
const wrongLetter = [];

function App() {
  const [selectedWord, setSelectedWord] = useState('');
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const inputRef = useRef(null);


  useEffect(() => {
    const random = words[Math.floor(Math.random() * words.length)];
    setSelectedWord(random);
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [playable]);

useEffect(() => {
  const handleKeydown = event => {
    const { key, keyCode } = event;


		if (playable && keyCode >= 65 && keyCode <= 90) {
			const letter = key.toLowerCase();

			if (selectedWord.includes(letter)) {
				if (!correctLetters.includes(letter)) {
					setCorrectLetters(currentLetters => [...currentLetters, letter]);
				} else {
					show(setShowNotification);
				}
			} else {
				if (!wrongLetters.includes(letter)) {
        		setWrongLetters(wrongLetter => [...wrongLetter, letter]);

				} else {
          show(setShowNotification);
        }
			}
		}
	}
  window.addEventListener('keydown', handleKeydown);

  return () => window.removeEventListener('keydown', handleKeydown);
},[correctLetters, wrongLetters, playable]);  

useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    const handleBlur = () => {
      setTimeout(() => inputRef.current?.focus(), 100);
    };

    inputRef.current?.addEventListener("blur", handleBlur);
    return () => inputRef.current?.removeEventListener("blur", handleBlur);
  }, []);


const playAgain = () => {
  setPlayable(true);
  setCorrectLetters([]);
  setWrongLetters([]);

  const random = words[Math.floor(Math.random() * words.length)];
  setSelectedWord(random);
  if (inputRef.current) inputRef.current.focus();

};

  return (
    <>
      <Header />
      <div className ="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetter wrongLetter={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>

      <input
        ref={inputRef}
        type="text"
        inputMode="text"
        className="absolute opacity-0 pointer-events-none"
        onChange={() => {}}
        onInput={(e) => {
    const inputValue = e.target.value.toLowerCase().slice(-1); // last typed letter
    if (!/^[a-z]$/.test(inputValue)) return;

    if (playable && selectedWord.includes(inputValue)) {
      if (!correctLetters.includes(inputValue)) {
        setCorrectLetters((curr) => [...curr, inputValue]);
      } else {
        show(setShowNotification);
      }
    } else {
      if (!wrongLetters.includes(inputValue)) {
        setWrongLetters((curr) => [...curr, inputValue]);
      } else {
        show(setShowNotification);
      }
    }

    e.target.value = ""; 
  }}
        autoFocus
      />

      <Message showNotification={showNotification} />
      <Alert correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
       
    </>
  )
}

export default App
