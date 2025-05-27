import { checkWin } from '../helpers/helpers';
import { useEffect } from 'react';

const Alert = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  const result = checkWin(correctLetters, wrongLetters, selectedWord);

  if (result === 'win') {
    finalMessage = 'Congratulations! You won!';
    playable = false;
  } else if (result === 'lose') {
    finalMessage = 'You lost. Try Again!';
    finalMessageRevealWord = `The word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  }, [playable, setPlayable]);

  if (finalMessage === '') return null;

  return (
    <div className="alert-container">
      <div className="alert">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Alert;
