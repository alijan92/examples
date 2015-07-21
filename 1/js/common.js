//icons animation
$(document).ready(function () {

    $(".small_mnu").click(function() {
    $(this).next().children("ul").slideToggle();
	});

	$(".services_mnu").click(function() {
		$(".main_cats").slideToggle();
	});

    $(".mc_item_wrap ul").each(function () {
        $(this).after("<div class='mc_item_wrap_af'></div>");
    });
    $(".mc_toggle").click(function () {
        if ($(this).parent().parent().children("ul").is(":visible")) {
            $(this).parent().parent().children("ul").slideUp();
            $(this).parent().parent().children(".mc_item_wrap_af").hide();
        } else {
            $("body .mc_wrap .mc_item_wrap > ul, .mc_item_wrap_af").hide();
            $(".mc_item_wrap").removeClass("active");
            $(this).parent().parent().addClass("active");
            $(this).parent().parent().children("ul").show();
            $(this).parent().parent().children(".mc_item_wrap_af").show(0);
        }
    });

    //equalheight - одинаковая высота колонок
    //Пример списка элементов:
    //var eqElement = ".cat_container > div, .home_news > div"
    var eqElement = ".hi_item, .sb_content>div"
    $(window).load(function () {
        equalheight(eqElement);
    }).resize(function () {
        equalheight(eqElement);
    });

    //Popup-manager FancyBox
    //Документация: http://fancybox.net/howto
    //<a class="fancybox"><img src="image.jpg" /></a>
    //<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
    $(".fancybox").fancybox();

});
