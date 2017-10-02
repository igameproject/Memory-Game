$(document).ready(function(){
    // var arr = [];
    var present,previous;
    var flag = true;
    $(".back").hover(function(){
        var present = $(this).attr("name");
        var parentId =  $(this).parent().attr("id");
        
       
        if(present == previous + '2' || previous == present + '2' ){
           
           $("[id=" + parentId + "]").css("visibility", "hidden");
           

        }


       previous = present;
       
        

        
    });
});