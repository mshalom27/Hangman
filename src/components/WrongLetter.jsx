
const WrongLetter = ({wrongLetter}) => {
  return (
     <div className="wrong-letters-container">
        <div>
          {wrongLetter.length > 0 && <p>Wrong</p>}
          {wrongLetter
          .map((letter,i) => <span key = {i}>{letter}</span>)
          .reduce((prev, curr) => prev == null ? [curr] : [prev, ",", curr], null )};

        </div>
      </div>
  );
};

export default WrongLetter;