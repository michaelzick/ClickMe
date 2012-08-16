$('document').ready(function(){

function clickMe(wide, op1, op2) {

    this.wide = wide;
    this.op1 = op1;
    this.op2 = op2;
    ogWidth = $('.clickMe').css('width');

    $('.clickMe').toggle(function() {
        $(this).css('opacity', op1).css('width', wide);
    }, function() {
        $(this).css('opacity', op2).css('width', ogWidth);
    });
}

clickMe('50%', '0.4', '1');
});