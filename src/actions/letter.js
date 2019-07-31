
export const LETTER = "LETTER";

const setLetter = (letter) => ({
    type: LETTER,
    payload: letter
})

export const randomLetter = () => dispatch => {
    dispatch(setLetter(letters[Math.floor(Math.random() * letters.length)].toUpperCase()))
}

// function randomLetter() {
//     return letters[Math.floor(Math.random() * letters.length)].toUpperCase();
//   }

const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "y",
    "z"
  ];