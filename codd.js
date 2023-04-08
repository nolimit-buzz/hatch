(jQuery)(function() {
    $(".right-panel-content.content:not(.right-panel-content.content.first)").hide();
 
    $(document).ready(function(){

        $(".right-panel-menu .project-menu").each(function(i,v){
        console.log('v',v);
            $(v).click(function(){
                $active_memu = $(this).data("menu");
                console.log('active_memu',$active_memu);

                $(".right-panel-content.content").hide();
                $(".right-panel-content.content[data-content='"+$active_memu+"']").show();
    
            });
            
        });

    });
});