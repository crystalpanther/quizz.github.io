$(document).ready(function(){
        const ScrollPage = () => {
            $('a[href^="#"]').on('click', function(e) {
                e.preventDefault();
                let target = this.hash;
                let $target = $(target);
            $('body, html').animate({
                    'scrollTop': $target.offset().top
                }, 800, "easeOutBounce", function() { window.location.hash = target; });
            });
            return false;
        }

        //scroll circle init function
        removeSection = function(e){
            $(e).parents("body > div").remove();
            $('body').each(function(){
                $(this).scrollspy('refresh');
            });
        };
        $("body").scrollspy({target: "#nav_menu", offset: 50});

        ScrollPage();
    });
