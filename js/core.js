// Games Category List
$('.category li').click(function () {
    $('.category li').children('a').removeClass('active')
    $(this).children('a').addClass('active')
    $('.category li:first-child').children('a').removeClass('active')
});

$('.category li:first-child').click(function () {
    $('.sub-menu').fadeToggle();
    $(this).children('a').toggleClass('br-0');
    $('.category li:nth-child(2)').children('a').addClass('active')
});


// Add To Cart Loading
$('.sub-hover button').click(function () {
    var atr = $(this).children('i').attr('class')
    var thiss = $(this)
    $(this).children('i').attr('class', 'fa fa-spinner fa-spin')
    $(this).attr('disabled', 'true')
    setTimeout(function () {
        $(thiss).children('i').attr('class', atr)
        $(thiss).removeAttr('disabled')
        $('.toast').toast('show');

    }, 1000)
})

$('.single-cart button').click(function () {
    var atr = $(this).children('i').attr('class')
    var thiss = $(this)
    $(this).children('i').attr('class', 'fa fa-spinner fa-spin')
    $(this).attr('disabled', 'true')
    setTimeout(function () {
        $(thiss).children('i').attr('class', atr)
        $(thiss).removeAttr('disabled')
        $('.toast').toast('show');
    }, 1000)
})




// Header Button Tooltip
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});









$(document).click(function (e) {
    var $sender = $(e.target);
    if ($sender.closest(".customer, .user-hover, .mobile-user img").length) {
        return;
    } else {
        $('.user-hover').hide(200)
    }
})


// Mobile User Information Toggle



// Hide Mobile Information Toggle when clicked body


// Hide Mobile Notifications Toggle when clicked body
$(document).click(function (e) {
    var $sender = $(e.target);
    if ($sender.closest(".mobile-user-inform, .notificationicon, .notifications").length) {
        return;
    } else {
        $('.notifications').hide(200)
    }

})


// Get Input File Value
$('#photo').change(function () {
    var filename = $('input[type=file]').val().split('\\').pop();
    document.getElementById('sell-img').innerText = filename
})


// For Stockless Products
$('.no-stock a').click(function () {
    return false
})


$('.single-qty .qtyplus, .single-qty .qtyminus').click(function () {
    pointCalculatorSingle($(this).parent().find('.qty'))
})
$('.product-modal .qty').keyup(function () {
    $(this).parents('.modal-body').find('.data-point').text(parseInt($(this).val()) * parseInt($(this).parents('.modal-body').find('.data-point').data('value')))
})
$('.product-modal .qtyplus, .product-modal .qtyminus').click(function () {
    $(this).parents('.modal-body').find('.data-point').text(parseInt($(this).parents('.modal-body').find('.qty').val()) * parseInt($(this).parents('.modal-body').find('.data-point').data('value')))
})




// For Empty Card Pages
$('.no-permit a').click(function () {
    return false
})


// Delete Products in Card Page and Redirect to Empty Card Page
$('.cart-delete a').click(function () {
    $(this).parents('tr').hide('slow')
    if ($('.user-cart table tbody tr').is(':hidden')) {
        $(location).attr('href', 'cart-empty.html')
    }
})


// For Show and Hide Eye Icon
$('.js-hide-password').click(function () {
    return false
})


// Change selected Link in Bank Account Page
$('.left-nav li a').click(function () {
    $('.left-nav li').children('a').removeClass('selected-link')
    $(this).addClass('selected-link')
    $('.category li:first-child').children('a').removeClass('selected-link')
});


// Toggle File And Submit Input in Payment Page



// Show Receipt Image Before Uploading


$('.dashboard-titles .nav-pills .nav-link:first-child').click(function () {
    $('.left-dasboard').css('border-bottom', 'none')
})


// Telephone Input Validation
if ($('input').hasClass('user-phone')) {
    var dynamicMask = IMask(
        document.getElementById('dynamic-mask'),
        {
            mask: [
                {
                    mask: '(000)-000-00-00'
                },
                {
                    mask: /^\S*@?\S*$/
                }
            ]
        });
}


// Footer Menu Active





// Hide Mobile Menu When User Icon Clicked



// Show and Hide Mobile Mode Section
$('.mobile-footer .footer-item:last-child').click(function (e) {
    $('.dark-light').toggleClass('show-mode')
    e.stopPropagation();
    if ($('div').hasClass('show-menu')) {
        $('.mobile-hide-menu').removeClass('show-menu')
        $('.mobile-hide-menu').addClass('hide-menu')
    }
    if ($('div').hasClass('show-category')) {
        $('.mobile-hide-category').removeClass('show-category')
        $('.mobile-hide-category').addClass('hide-category')
    }
    $('.notifications').hide(200)
    $('.mobile-hover').hide('slow')
})


// Prevent Submit on Page Search
$('.search-wrapper button').click(function (e) {
    e.preventDefault()
})


// Show and Hide Mobile Category
$('.mobile-footer .footer-item:nth-child(2)').click(function (e) {
    e.preventDefault()
    $('.mobile-hide-category').addClass('show-category')
    $('.mobile-hide-category').removeClass('hide-category')
    $('.bg-mode').show()
    if ($('div').hasClass('show-menu')) {
        $('.mobile-hide-menu').removeClass('show-menu')
        $('.mobile-hide-menu').addClass('hide-menu')
    }
    if ($('div').hasClass('show-mode')) {
        $('.dark-light').removeClass('show-mode')
    }

})
$('.close-btn i').click(function () {
    $('.mobile-hide-category').addClass('hide-category')
    $('.mobile-hide-category').removeClass('show-category')
    $('.bg-mode').hide()
})


// Hide Mobile menu and category when clicked body
$('.bg-mode').click(function () {
    if ($('div').hasClass('show-menu')) {
        $('.mobile-hide-menu').addClass('hide-menu')
        $('.mobile-hide-menu').removeClass('show-menu')
        $(this).hide()
    }
    if ($('div').hasClass('show-category')) {
        $('.mobile-hide-category').removeClass('show-category')
        $('.mobile-hide-category').addClass('hide-category')
        $('.bg-mode').hide()
    }
})


// Hide Mobile mode when clicked body
$(document).click(function (e) {
    var $sender = $(e.target);
    if ($sender.closest(".dark-light").length) {
        return;
    } else {
        $('.dark-light').removeClass('show-mode')
    }

})


// Owl Carousel for the best selling products





// Owl Carousel for the Statistics



// Show and Hide Toast
$('.toast').on('show.bs.toast', function () {
    $('.cart-toast').removeClass('main-toast')
    $('.cart-toast').addClass('main-toast-2')
})

$('.toast').on('hide.bs.toast', function () {
    $('.cart-toast').addClass('main-toast')
    $('.cart-toast').removeClass('main-toast-2')
})

// $('form').submit(function () {
//   $(this).find('button[type=submit]').prop('disabled', true);
//     $(this).find('button[type=submit]').html(' <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'+
//         '<span class="sr-only">Gözləyin...</span>');
//   $(this).find('input[type=submit]').prop('disabled', true);
//   $(this).find('input[type=submit]').val('Gözləyin...');
// });


