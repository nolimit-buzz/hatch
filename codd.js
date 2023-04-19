(jQuery)(function() {
    $(".right-panel-content.content:not(.right-panel-content.content.first)").hide();
 
    $(document).ready(function(){

        // Project Tab
        $(".project-menu").each(function(i,v){
        console.log('v',v);
            $(v).click(function(){
                $active_memu = $(this).data("menu");
                $(".project-menu").removeClass('active');
                // $(this).toggleClass('active');
                console.log('active_memu',$active_memu);
          
                $(".project-menu[data-menu='"+$active_memu+"']").toggleClass('active');

                $(".right-panel-content.content").hide();
                $(".right-panel-content.content[data-content='"+$active_memu+"']").show();
    
            });
            
        });

        // Project  switch
        
        $("svg#list").click(function(i,v){

            $("svg#grid").removeClass('active');
            $(this).addClass('active');
            $(".project-list").css("display","grid");
            $(".project-grid").css("display","none");;
        });
        $("svg#grid").click(function(i,v){
            $("svg#list").removeClass('active');
            $(this).addClass('active');
            $(".project-list").css("display","none");;
            $(".project-grid").css("display","grid");;
        });


    });
});