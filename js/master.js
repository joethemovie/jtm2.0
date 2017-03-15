
window.onload = function() {
  const subArray = [`creating with <span class="redEmoji">&hearts;</span> since 1990`,`this is just a test`,`designer + developer` ];

  let arraySelector = Math.floor(Math.random() * 3 ) + 0;
  console.log(arraySelector);

  document.getElementById('subtext').innerHTML = subArray[arraySelector];
  document.body.className += ' loaded'

};
