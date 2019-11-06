$(function () {

    var toastAudio = new Audio('/media/toast.wav');
    toastAudio.currentTime = 0;

    $('.clickme').on('click', function (e) {
        //e.PreventDefault();
        toastAudio.play();
        $('#product').html($(this).data('product'));
        $('#code').html($(this).data('code'));
        $('.toast').toast({ autohide: false }).toast('show');
    });

    $('.toastClose').keyup(function () {
        $('.toast').toast('hide');
    });
    $(document).on('keyup', function (e) {
        if (e.key === 'Escape') {
            $('.toast').toast('hide');
        }
    });

    //    $('.toast').toast({ autohide: false }).toast('show');
    //    $('.toast-header:first-child').text($(this).data('Header'));
    //    $('.toast-body').text("Discount code: " + $(this).data('code'));
    //})
    //$('#disc1').data({ 'Header': "Anton's Seasoning", 'code': "anton1234" });
    //$('#disc2').data({ 'Header': "Genen Shouyu", 'code': "shouyu1234" });
    //$('#disc3').data({ 'Header': "Schoggi Schokolade", 'code': "schog1234" });

    //$('.toast').toast('show');
    //random animate
    //var rand = 1 + Math.floor(Math.random() * 8);

    //if (rand == 1) {
    //    $('#hbd').addClass('animated slideInUp');
    //} else if (rand == 2) {
    //    $('#hbd').addClass('animated flip');
    //} else if (rand == 3) {
    //    $('#hbd').addClass('animated bounceIn');
    //} else if (rand == 4) {
    //    $('#hbd').addClass('animated jello');
    //} else if (rand == 5) {
    //    $('#hbd').addClass('animated tada');
    //} else if (rand == 6) {
    //    $('#hbd').addClass('animated shake');
    //} else if (rand == 7) {
    //    $('#hbd').addClass('animated wobble');
    //} else if (rand == 8) {
    //    $('#hbd').addClass('animated flash');
    //}

    //$('#birthday').datepicker();
    //$('#blueballoon').draggable();
    //check/uncheck all
    //var clicked = false;

    //$('#checkAll').on('click', function () {
    //    $('.form-check-input').prop('checked', !clicked);
    //    clicked = !clicked;
    //});

    //// toast on submit - none checked
    //$('#submit').on('click', function () {
    //    if ($('.form-check-input').is(':checked')) {
    //        //while something is checked
    //    } else {
    //        //none
    //        $('#toastBalloon').toast({ autohide: false }).toast('show');
    //    }                   
    //});

    //$(document).on('keyup', function (e) {
    //    if (e.key === 'Escape') {
    //        $('#toastBalloon').toast('hide');
    //    }
    //})
    //$('.clickme').on('click', function(e) {
    //    //e.PreventDefault();
    //    $('#product').html($(this).data('product'));
    //    $('#code').html($(this).data('code'));
    //    $('.toast').toast({ autohide: false }).toast('show');

    //});


    //$('.form-check-input').each(function () {
    //    $(this).prop('checked', false);
    //});

    ////balloon fx
    //$('.form-check-input').on('change', function () {
    //    $('#' + this.id + 'Img').css('visibility', 'visible');

    //    $(this).is(':checked') ?
    //        $('#' + this.id + 'Img').removeClass().addClass('animated slideInUp') :
    //        $('#' + this.id + 'Img').addClass('animated slideOutDown');
    //});

    //// css hover color
    //$('.form-check-input').on('mouseenter', function () {
    //    $('#hbd').css('color', this.id);
    //});
    //$('.form-check-input').on('mouseleave', function () {
    //    $('#hbd').css('color', '#ffffff');
    //});

});
