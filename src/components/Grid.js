import React from 'react';
import Row from './Row';

export default function Grid({ currentGuess, guesses, turn }) {
  return (
    <div>
      {guesses.map((g, idx) => {
        if (turn === idx) {
          return <Row key={idx} currentGuess={currentGuess} />;
        }
        return <Row key={idx} guess={g} />;
      })}
    </div>
  );
}
