function Word({selectedWord, correctLetters}) {

    if (!selectedWord || typeof selectedWord !== 'string') {
    return <p>Error: Word not loaded</p>; 
  }
console.log("Word props:", { selectedWord, correctLetters });

    return (
        <div className="word" >
            {selectedWord.split('').map( (letter, i) => (
                
                    <span className="letter" key={i}>
                        {correctLetters.includes(letter) ? letter : ''}
                    </span>
            ))}
        </div>
    );
}

export default Word;