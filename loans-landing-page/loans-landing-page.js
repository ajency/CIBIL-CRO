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

//get in touch form

//patterns
let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

//messages
let invalidEmailMessage = "Please enter a valid email address"
let requiredInputMessage = "This field is required"

//show error
function showError(field, message){
  $(field).parents('.input-group').addClass('error')
  $(field).next('.message').text(message).addClass('error').show('medium')
}

//show success
function showSucces(field){
  $(field).parents('.input-group').removeClass('error')
  $(field).next('.message').hide('medium').removeClass('error')
}

//form submit
function formSubmit(form){
  let errorCount = $(form).find('.input-group.error').length

  if(errorCount == 0){
    $(form).unbind().submit()
  }
}

// check valid email
function emailValidation(input, errorMessage) {

  if ($(input).val().match(emailPattern)) {
    $(input).next('.message').hide("medium")
    showSucces(input)
    return true;
  }
  else if($(input).val() == ''){
    showError(input, requiredInputMessage)
    return false
  } else {
    showError(input, errorMessage)
    return false
  }
}

//email onchange
$('#llp_email').on('change keyup', function(e){
  emailValidation(e.target, invalidEmailMessage)
})

//cosent validation
function consentValidation(consentField){
  if(consentField.checked){
    $(consentField).parents('.input-group').removeClass('error')
  }else{
    $(consentField).parents('.input-group').addClass('error')
  }
}

//consent onchange
$('#llp_concent').change(function(e){
  consentValidation(e.target)
});

$('#llp-getintouch-form').submit( function(e){
  e.preventDefault();
  let form = '#'+ e.target.id

  //email field validation
  let emailField = $(form).find('#llp_email')
  emailValidation(emailField, invalidEmailMessage)

  //concent checkbox validation
  let consentField = $(form).find('#llp_concent')
  consentValidation(consentField)

  //submit form
  formSubmit(form)
});

//tabs
function alignTabIndicator(tabIndicator, activeTab){
  let activeTabNew = $(activeTab).parents('.nav-item')
  let activeTabLeftPosition = activeTabNew.position().left
  console.log(activeTabLeftPosition)
  $(tabIndicator).css('left', activeTabLeftPosition)
}

alignTabIndicator('#documentationPopup .tab-indicator', '#documentationPopup .nav-item.active .nav-link')

$('a[data-toggle="pill"]').on('shown.bs.tab', function (event) {
  event.target // newly activated tab
  event.relatedTarget // previous active tab
  alignTabIndicator('#documentationPopup .tab-indicator', event.target)
})


 $(".llp-popup-body .tab-content").scroll(function() {
        var scroll = $(this).scrollTop();
        if (scroll >= 10) {
            $(this).addClass("scrolled");
        } else {
            $(this).removeClass("scrolled");
        }
 });