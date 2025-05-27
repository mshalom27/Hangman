

function Word({ selectedWord, correctLetters }) {
  if (!selectedWord || typeof selectedWord !== 'string') {
    return <p>Error: Word not loaded</p>;
  }

  return (
    <div className="word flex justify-center gap-2 mt-8 flex-wrap">
      {selectedWord.split('').map((letter, i) => (
        <span
          className="letter border-b-2 border-blue-400 text-2xl font-medium h-12 w-8 flex items-center justify-center"
          key={i}
        >
          {correctLetters.includes(letter) ? letter : ''}
        </span>
      ))}
    </div>
  );
}

export default Word;

