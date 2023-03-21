import { useState } from 'react';

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]); // each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);

  // format a guess into an array of letter objects
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {
    // l is shorthand for letter
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((l) => {
      return {
        key: l,
        color: 'grey',
      };
    });
    // formatted guess for green
    formattedGuess.forEach((l, i) => {
      if (solutionArray[i] === l.key) {
        formattedGuess[i].color = 'green';
        solutionArray[i] = null;
      }
    });
    // formatted guess for yellow
    formattedGuess.forEach((l, i) => {
      if (solutionArray[i] === l.key && l.color !== 'green') {
        formattedGuess[i].color = 'yellow';
        solutionArray[i] = null;
      }
    });
  };
  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = () => {};

  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyup = ({ key }) => {
    console.log('key pressed - ', key);
    if (key === 'Enter') {
      if (turn > 5) {
        console.log('you used all your guesses');
        return;
      }
      if (history.includes(currentGuess)) {
        console.log('you already guessed that word');
        return;
      }
      if (currentGuess.length > 5) {
        console.log('your guess is too long');
        return;
      }
      formatGuess();
    }
    if (key === 'Backspace') {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      }
    }
    return { turn, currentGuess, guesses, isCorrect, handleKeyup };
  };
};

export default useWordle;
