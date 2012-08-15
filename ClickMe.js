$('document').ready(function(){

var clickMe;
var sizeMe;
var ogWidth = $('.clickMe').css('width');

var sizeMe = {
    wide: '25%',
    high: '12.5%',
    op1: '0.4',
    op2: '1'
};

var clickMe = function() {

    $('.clickMe').toggle(function() {
        $(this).css('opacity', sizeMe.op1).css('width', sizeMe.wide);
    }, function() {
        $(this).css('opacity', sizeMe.op2).css('width', ogWidth);
    });
};
clickMe();
});