import $ from 'jquery';

$(document).ready( function() {

    $('.footer_contact').on('click', function() {
        $('.popup_contact').toggle(500);
    });

    $('.fa.fa-times-circle-o').on('click', function() {
        $('.popup_contact').hide(600);
    });
});