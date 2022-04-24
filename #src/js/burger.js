$(document).ready(function(){
    $('.main__burger').click(function(event){
        $('.main__burger, .header-body__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});