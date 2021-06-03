$(function (){

    let innerH = $("#intro").innerHeight(); //Высота блока intro
    let header= $("#header"); 
    let srcollOffSet= $(window).scrollTop();//текущее значение скролла при обновлении страницы

    /*fixed header*/
    checkScroll(srcollOffSet);//Добавление фиксированого класа header при обновлении страницы

    $(window).on("scroll",function(){
        srcollOffSet=$(this).scrollTop();
        checkScroll(srcollOffSet);
    });

    function checkScroll(){  //Добавление фиксированого класа header
        if(srcollOffSet >=innerH-50){
            header.addClass("fixed");
        }else{
            header.removeClass("fixed");
        }
    };

    // smooth scroll
    $("[data-scroll]").on("click",function(event){

        event.preventDefault();// отмена стандартного поведение ссылки
        let $this=$(this),
         blockId = $(this).data("scroll"),
         blockOffSet=$(blockId).offset().top;//отступ от верха страницы к блоку 

        $("#nav a").removeClass("active"); //удаление нижнего подчеркивания в nav во всех элементах
        $this.addClass("active");//добавление нижного подчеркивания в nav

        $("html,body").animate({//анимация плавного скролла
            scrollTop: blockOffSet
        },500);
    });

     // burger menu

     $("#nav--toggle").on("click",function(){

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
     });
});