$(document).ready(function() {
window.onload = function() {
  const subArray = [`creating with <span class="redEmoji">&hearts;</span> since 1990`,`this is just a test`,`designer + developer` ];

  let arraySelector = Math.floor(Math.random() * 3 ) + 0;


  document.getElementById('subtext').innerHTML = subArray[arraySelector];
  document.body.className += ' loaded'

};
let buttonTest = false;
  $('#contactButton').click(function() {
    if (buttonTest === false) {
      buttonTest = true;
      $('#additionalContact').css({'height' : '80px'}).delay(100);
      $('#contactInformation').fadeIn(1000, function() {
        $('#contactInformation').css({'display' : 'block'});
      });
    } else {
      buttonTest = false;
      $('#additionalContact').css({'height' : '0px'}).delay(100);
      $('#contactInformation').fadeOut(100, function() {
        $('#contactInformation').css({'display' : 'none'});
      });
    }

  });
});
