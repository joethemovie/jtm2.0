function audioPlayer() {
  let currSong = 0;
  $("#audioPlayer")[0].src = $("#playlist li a")[0];

  $("#playlist img").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("audioStatic.png", "audioHover.png");
    });
    }, function(){
        $(this).attr("src", function(index, attr){
            return attr.replace("audioHover.png", "audioStatic.png");
        });
    });
  $("#playlist li a").click(function(e){
    e.preventDefault();
    $("#audioPlayer")[0].src = this;
    $("#audioPlayer")[0].play();
    $("#playlist li").removeClass('current-song');
    $('#playlist img').attr('src', "inc/audioStatic.png");
    currSong = $(this).parent().index();
    $(this).parent().addClass('current-song');
    $(this).find('img').attr('src', 'inc/audioActive.png');
  });

  $('#audioPlayer')[0].addEventListener("ended", function() {
    currSong++;
    if (currSong == $('#playlist li a').length)
        currSong = 0;
    $('#playlist li').removeClass('current-song');
    $('#playlist li:eq('+currSong+')').addClass('current-song');
    $('#audioPlayer')[0].src = $('#playlist li a')[currSong].href;
    $('#audioPlayer')[0].play();
  });
}
