$(document).ready(function() {

  $('#bgTransition').delay(400).fadeOut(400);
  $('.sectionVis').fadeOut(1);

  const subtextArray = [
    `creating with <span class="redEmoji">&hearts;</span> since 1990`,
    `computational designer`,
    `designer + developer`
  ];

  let arraySelector = Math.floor(Math.random() * 3 ) + 0;


  document.querySelector('#subtext').innerHTML = subtextArray[arraySelector];
  document.body.className += ' loaded'

  function audioPauser() {
    if (document.getElementById('audioPlayer').play)document.getElementById('audioPlayer').pause();
  }


let buttonTest = false;
  $('#contactButton').click(function() {
    if (buttonTest === false) {
      buttonTest = true;
      $('#additionalContact').css({'height' : '80px'}).delay(100);
      $('#contactInformation').fadeIn(1000, function() {
        $('#contactInformation').css({'display' : 'block'});
      }); } else {
      buttonTest = false;
      $('#additionalContact').css({'height' : '0px'}).delay(100);
      $('#contactInformation').fadeOut(100, function() {
        $('#contactInformation').css({'display' : 'none'});
      });
    }

  });
// Code Nav Functionality
  $('#code').click(function(){
    audioPauser()
    setTimeout(function(){

      $('#bgTransition').css({'background-color' : '#19151E'}).fadeIn('400');


      setTimeout(function(){
        $('.sectionVis').fadeOut(400);
        $('body').css({'background': '#19151E url(../inc/codingBG.jpg) no-repeat center center fixed', 'background-size' : 'cover'});
        $('.navLink').css({'color' : '#ffffff'});
        $('#siteHeader').css({'color' : '#ffffff'});
        $('#subtext').css({'color' : '#ffffff'});
      }, 400);

      $('#bgTransition').delay(500).fadeOut(400);
      setTimeout(function(){
        $('#codingSection').delay(400).fadeIn(400);
      }, 600);
    }, 300);
  });
// Video Nav Functionality
  $('#video').click(function(){
    setTimeout(function(){
      audioPauser()
      $('#bgTransition').css({'background-color' : '#F0FFFC'}).fadeIn('400');


      setTimeout(function(){
        $('.sectionVis').fadeOut(400);
        $('body').css({'background': '#F0FFFC url(../inc/vidTest.jpeg) no-repeat center center fixed', 'background-size' : 'cover'});
        $('.navLink').css({'color' : '#000000'});
        $('#siteHeader').css({'color' : '#000000'});
        $('#subtext').css({'color' : '#000000'});
      }, 400);

      $('#bgTransition').delay(500).fadeOut(400);
      setTimeout(function(){
        $('#videoSection').delay(400).fadeIn(400);
      }, 600);
    }, 300);
  });
// Voice Nav Functionality
  $('#voice').click(function(){
    setTimeout(function(){
      audioPauser()
      $('#bgTransition').css({'background-color' : '#1f1f1f'}).fadeIn('400');


      setTimeout(function(){
        $('.sectionVis').fadeOut(400);
        $('body').css({'background': '#1f1f1f url(../inc/voice.jpeg) no-repeat center center fixed', 'background-size' : 'cover'});
        $('.navLink').css({'color' : '#ffffff'});
        $('#siteHeader').css({'color' : '#ffffff'});
        $('#subtext').css({'color' : '#ffffff'});
      }, 400);
      setTimeout(function(){
        $('#voiceSection').delay(400).fadeIn(400);
      }, 600);
      $('#bgTransition').delay(500).fadeOut(400);
    }, 300);
  });

  $('.videoContent').click(function(e){
    e.preventDefault();
    console.log( $(this).find('img').attr('data-media'));
    $("#videoPlayer_html5_api")[0].src = $(this).find('img').attr('data-media');
    $("#videoPlayer_html5_api").get(0).play();
  });
});
