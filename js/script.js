$(document).ready(function(){
    // SEARCHBAR
    $('.searchbox__btn').click(function(){
        $('input#search').focus().toggleClass('active-search');
        $('.searchbox__btn').toggleClass('active-search__btn');
    });

    // BURGER
    $('.main-header__burger').click(function(){
        $('.main-header__burger, .main-header__nav').toggleClass('active-burger');
    });

    // FILTER
    $('.tabs__item').click(function(event){
        event.preventDefault();
        var i = $(this).data('filter');

        if(i==1){
            $('.f-item').show();
        } else{
            $('.f-item').hide();
            $('.f-item.f_'+i).show();
        }
        $('.tabs__item').removeClass('active-tab');
        $(this).addClass('active-tab');
    });

    // TABS DESCRIPTION
    $('.f-item').hover(function(){
        $(this).find('.f-item__caption').toggleClass('active-caption');
    });

    // CUSTOMERS SLIDER
    $(".owl-carousel").owlCarousel({
        items: 2,
        loop: true,
        lazyLoad: false,
        responsive: {
            0: {
                items: 1,
                center: true
            },
            769: {
                items: 2
            }
        }
    });
});