$('.header__link').on('click', function(e){
  $(".header__link").removeClass("active");
  $(this).addClass("active");
});

    // скрол по сайту
    $("[data-nav]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('nav');
        let elementOffset = $(elementId).offset().top;
        $("html, body").animate({
            scrollTop: elementOffset - 60
        }, 700);
    });

// бургер меню
if(window.matchMedia('(max-width: 768px)').matches){
     $('.header__link, .nav').hide();
  } else {
  	$('.header__link, .nav').show();
  }

$(window).resize(function(){
	let width = $(this).width();
	let height = $(this).height();
	if(width < 767) {
     $('.header__link, .nav').hide();
     	$('.burger').removeClass('active');
     	$('.burger').click(function(event) {
	$('.burger').toggleClass('active');
	$(".header__link, .nav").toggle(400);
	$(".header__link, .nav").clik(function() {
			$(".header__link, .nav").hide();
	})
});

  } else {
  	$('.header__link, .nav').show();
  		$('.burger').removeClass('active');
  }
});


