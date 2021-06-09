const message = ['a', 'b', 'c'];

function randomMessage(phrase) {
  const randomNumber = Math.floor(Math.random() * phrase.length);
  const phraseRandom = phrase[randomNumber];

  //change the h1 text
  const content = document.getElementById('content');
  content.innerHTML = `<h1>${phraseRandom}</h1>`;
}

randomMessage(message);
