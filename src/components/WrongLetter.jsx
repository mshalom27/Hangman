

const WrongLetter = ({ wrongLetter }) => {
  return (
    <div className="wrong-letters-container mt-6 w-full text-center text-red-600 font-semibold tracking-wider select-none">
      <div>
        {wrongLetter.length > 0 && <p className="mb-1 text-lg font-bold">Wrong</p>}
        {wrongLetter
          .map((letter, i) => (
            <span key={i} className="inline-block mx-1 text-2xl">
              {letter}
            </span>
          ))
          .reduce((prev, curr) => (prev == null ? [curr] : [prev, ",", curr]), null)}
      </div>
    </div>
  );
};

export default WrongLetter;
