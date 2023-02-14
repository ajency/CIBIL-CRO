// Banner Slider
$(".llp-banner-slider").slick({
  arrows: false,
  dots:true,
  appendDots: '.llp-slick-dots'
});

// Lending Partners Carousel
$(".llp-partners-carousel").slick({
  slidesToShow: 6,
  arrows:false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  pauseOnHover: false,
  cssEase: 'linear',
  accesibility: false,
  draggable: false,
  swipe: false,
  touchMove: false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});

//youtube video player
function onPlayerReady(event){
  //console.log("Player Ready!")
  //console.log(event)
}
function stopVideo() {
  player.stopVideo();
}
function playVideo() {
  player.playVideo();
}
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('llp_yt_player1', {
    height: '390',
    width: '640',
    videoId: 'QyfulyhtkdA',
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

if($('.llp-yt-player').is(":visible")) {
  setTimeout(
    function(){
      // Youtube video player
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }, 1000
  );
};

$('.video-play-button').click( function() {
  let videoPlayerParent = $(this).parents('.llp-video-player')
  $(videoPlayerParent).find('.content').fadeOut()
  $(videoPlayerParent).find('.video-thumbnail').fadeOut()
  $(videoPlayerParent).addClass('player-enabled')
  $(videoPlayerParent).find('#llp-yt-player').fadeIn()
  playVideo()
})