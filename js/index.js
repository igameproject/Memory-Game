$(document).ready(function(){
    var present, previous;
    var flag = true;
    var tiles = 0;
    $(".back").hover(function() {
        var present = $(this).attr("name");
        var parentId =  $(this).parent().attr("id");
        
        if (present == previous + '2' || previous == present + '2') {
           $("[id=" + parentId + "]").css("visibility", "hidden");
           tiles += 2;
        }
        previous = present;
        if (tiles == 40) {
          $(".wrapper").html("<center class = 'youwin'><h1>You win</h1>" + 
            "<p>Refreshing Game</p>" + 
            "<i class='fa fa-refresh fa-spin fa-3x'></i></center>");
          setTimeout(
            function() {
              location.reload(); 
            }, 
            4000
          );
        }
    });
});
