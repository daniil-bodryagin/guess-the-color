'use strict';

const colorList = [
          ['indainred'],
          ['lightcoral'],
          ['salmon'],
          ['darksalmon'],
          ['lightsalmon'],
          ['crimson'],
          ['red'],
          ['firebrick'],
          ['darkred'],
          ['pink'],
          ['lightpink'],
          ['hotpink'],
          ['deeppink'],
          ['mediumvioletred'],
          ['palevioletred'],
          ['coral'],
          ['tomato'],
          ['orangered'],
          ['darkorange'],
          ['orange'],
          ['gold'],
          ['yellow'],
          ['lightyellow'],
          ['lemonchiffon'],
          ['lightgoldenrodyellow'],
          ['papayawhip'],
          ['mocassin'],
          ['peachpuff'],
          ['palegordenrod'],
          ['lavender'],
          ['thistle'],
          ['plum'],
          ['violet'],
          ['orchid'],
          ['fuchsia', 'magenta'],
          ['mediumorchid'],
          ['mediumpurple'],
          ['blueviolet'],
          ['darkviolet'],
          ['darkorchid'],
          ['darkmagenta'],
          ['rebeccapurple'],
          ['purple'],
          ['indigo'],
          ['slateblue'],
          ['darkslateblue'],
          ['cornsilk'],
          ['blanchedalmond'],
          ['bisque'],
          ['navajowhite'],
          ['wheat'],
          ['burlywood'],
          ['tan'],
          ['rosybrown'],
          ['sandybrown'],
          ['goldenrod'],
          ['darkgoldenrod'],
          ['peru'],
          ['chocolate'],
          ['saddlebrown'],
          ['sienna'],
          ['brown'],
          ['maroon'],
          ['greenyellow'],
          ['cartreuse'],
          ['lawngreen'],
          ['lime'],
          ['limegreen'],
          ['palegreen'],
          ['lightgreen'],
          ['mediumspringgreen'],
          ['springgreen'],
          ['mediumseagreen'],
          ['seagreen'],
          ['forestgreen'],
          ['green'],
          ['darkgreen'],
          ['yellowgreen'],
          ['olivedrab'],
          ['olive'],
          ['darkolivegreen'],
          ['mediumaquamarine'],
          ['darkseagreen'],
          ['lightseagreen'],
          ['darkcyan'],
          ['teal'],
          ['auqa', 'cyan'],
          ['lightcyan'],
          ['paleturquoise'],
          ['aquamarine'],
          ['turquoise'],
          ['mediumturquoise'],
          ['darkturquoise'],
          ['cadetblue'],
          ['steelblue'],
          ['lightsteelblue'],
          ['powderblue'],
          ['lightblue'],
          ['skyblue'],
          ['lightskyblue'],
          ['deepskyblue'],
          ['dodgerblue'],
          ['cornflowerblue'],
          ['mediumslateblue'],
          ['royalblue'],
          ['blue'],
          ['mediumblue'],
          ['darkblue'],
          ['navy'],
          ['midnightblue'],
          ['white'],
          ['snow'],
          ['honeydew'],
          ['mintcream'],
          ['azure'],
          ['aliseblue'],
          ['ghostwhite'],
          ['whitesmoke'],
          ['seashell'],
          ['beige'],
          ['oldlace'],
          ['floralwhite'],
          ['ivory'],
          ['antiquewhite'],
          ['linen'],
          ['lavenredblush'],
          ['mistyrose'],
          ['gainsboro'],
          ['lightgray', 'lightgrey'],
          ['silver'],
          ['darkgray', 'darkgrey'],
          ['gray', 'grey'],
          ['dimgray', 'dimgrey'],
          ['lightslategray', 'lightslategrey'],
          ['slategray', 'slategrey'],
          ['darkslategray', 'darkslategrey'],
          ['black']
        ];

const colorRect = document.querySelector('.js-color-rect');
const answerText = document.querySelector('.js-answer');
const checkForm = document.querySelector('.js-guess-form');
const guessInput = document.querySelector('.js-guess-input');
let currentColor;

function setColor() {
  currentColor = colorList[Math.round(Math.random() * (colorList.length - 1))];
  colorRect.style.backgroundColor = currentColor[0];
}

function getGuessAccuracy(guessText) {
  if (!guessText) {
    return 'no-guess';
  }
  return (currentColor.indexOf(guessText) >= 0) ? 'good' : 'bad';
}

function writeAnswer() {
  const guessText = guessInput.value.toLowerCase();
  const guessAccuracy = getGuessAccuracy(guessText);
  if (guessAccuracy === 'good') {
    answerText.textContent = `You've got it! It was really ${guessText}.`;
  } else if (guessAccuracy === 'bad') {
    answerText.textContent = `Nope, it was ${currentColor[0]}. Try again!`;
  } else {
    answerText.textContent = `You didn't even try! It was ${currentColor[0]}.`;
  }
}

function clearInput() {
  guessInput.value = '';
}

window.onload = setColor;
checkForm.onsubmit = function(e) {
  e.preventDefault();
  writeAnswer();
  clearInput();
  setColor();
};
