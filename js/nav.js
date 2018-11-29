
 $('body').on('click','[data-menuid]', function() {
    $(this).toggleClass('active');
})

// Mobile Nav


     $('body').on('click','[data-menu-toggle-parent]',function(){
        $(this).parent().parent().addClass("active");
    });

    $("body").on("click", ".close-submenu", function(){
        $(this).parent().parent().removeClass("active");
    });

    $("body").on("click", "[data-toggle-mobilenav]", function(){
        $(".mobilenav").toggleClass("active");
    });
