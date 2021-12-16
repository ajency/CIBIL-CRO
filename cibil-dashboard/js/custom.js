$(function() {

    var activeIndex = $('.active-tab').index(),
        $contentlis = $('.tabs-content li'),
        $tabslis = $('.tabs li');

    // Show content of active tab on loads
    $contentlis.eq(activeIndex).show();

    $('.tabs').on('click', 'li', function(e) {
        var $current = $(e.currentTarget),
            index = $current.index();

        $tabslis.removeClass('active-tab');
        $current.addClass('active-tab');
        $contentlis.hide().eq(index).show();
    });
});

$('.for-overlay .button-icon').click(function(e) {
    e.preventDefault();
    $(this).closest('.for-overlay').children('.overlay-card').removeClass('d-none');
});
$('.for-overlay .closeovelay').click(function(e) {
    e.preventDefault();
    $(this).closest('.for-overlay').children('.overlay-card').addClass('d-none');
});


$(document).ready(function() {
    // Show the first tab and hide the rest
    $('#largetabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();

    // Click function
    $('#largetabs-nav li').click(function() {
        $('#largetabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });
});


$(".price").after('<span>₹</span>');
$('.modal-toggle1').on('click', function(e) {
    e.preventDefault();
    $('.modal1').toggleClass('is-visible');
    $('body').toggleClass('overflow-hidden');
});
$('.close-modal').on('click', function(e) {
    e.preventDefault();
    $('.modal1').removeClass('is-visible');
    $('body').removeClass('overflow-hidden');

});



$('.modal-toggle2').on('click', function(e) {
    e.preventDefault();
    $('.modal2').toggleClass('is-visible');
    $('body').removeClass('overflow-hidden');
});
$('.close-modal').on('click', function(e) {
    e.preventDefault();
    $('.modal2').removeClass('is-visible');
    $('body').removeClass('overflow-hidden');

});


$(document).mouseup(function(e) {
    var container = $(".dd-input");

    if (!container.is(e.target) // if clicked outside
        &&
        container.has(e.target).length === 0) {
        container.hide();
        $(".dd-input").prop("checked", false); //to uncheck
    }
});
$('.benefits-outer').slideUp();

$('.offer-details').click(function(e) {
    e.preventDefault();
    $(this).next().filter('.benefits-outer').slideToggle();
    $(this).closest('.benefits-outer').show();
    // $('.benefits-outer').slideToggle();
});

var options = {
    valueNames: ['name', 'Amount', 'percent', 'annual-fees']
};

var userList = new List('users', options);


function getBank(el) {
    bank = $(el).attr('bank');
    alert(bank);
    $('.compare-price').text(bank);
}



function extraTicketAttachment(el) {
    jQuery(".offer-to-compare .compare-grouped").append('<div class="ms-0"><img src="img/comparebajaj.svg" alt="" class="offer-image"><span class="compare-price">₹8,00,000</span><img src="img/times.svg" alt="" class="times"></div>')
    // bank = $(el).attr('bank');
    // alert(bank);
    // $('.compare-price').text(bank);
}
function extraTicketAttachmenthdfc(el) {
    jQuery(".offer-to-compare .compare-grouped").append('<div class="ms-0"><img src="img/hdfc.png" alt="" class="offer-image" width="73px"><span class="compare-price">₹8,00,000</span><img src="img/times.svg" alt="" class="times"></div>')
    // bank = $(el).attr('bank');
    // alert(bank);
    // $('.compare-price').text(bank);
}
function extraTicketAttachmentaditya(el) {
    jQuery(".offer-to-compare .compare-grouped").append('<div class="ms-0"><img src="img/aditya.png" alt="" class="offer-image" width="73px"><span class="compare-price">₹8,00,000</span><img src="img/times.svg" alt="" class="times"></div>')
    // bank = $(el).attr('bank');
    // alert(bank);
    // $('.compare-price').text(bank);
}