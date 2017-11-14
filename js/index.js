
var first = null, second = null;
var tiles = 0;
var time = new Date().getTime();
var blockInput = false;

$(document).ready(function(){

	
    
	$(".front").click(function(){
		if(blockInput){
			return;
		}
		console.log("first : " +first);
		console.log("second: " +second);
		if(first == null){
			first = $(this).parent();			
			first.addClass("activated");
			return;
		}
		if(first != second){
			second = $(this).parent();				
			second.addClass("activated");
		}
		
        
		if(first != null && second != null){
			if(first.attr("id") == second.attr("id")){
				blockInput = true;	
				first.removeClass("activated").addClass("match");
				second.removeClass("activated").addClass("match");
				setTimeout(function() { removeCorrectTiles(); }, 700);
			}else{
				blockInput = true;
				first.removeClass("activated").addClass("mismatch");
				second.removeClass("activated").addClass("mismatch");
				setTimeout(function() { resetWrongTiles(); }, 800);
			}
		   
		}
	});
});

resetWrongTiles = function(){
	first.removeClass("mismatch");
	second.removeClass("mismatch");
	unblock();
}
removeCorrectTiles = function(){
	first.removeClass("match").addClass("done");
	second.removeClass("match").addClass("done");
	unblock();
	
	tiles += 2;
	checkWin();
}

unblock = function(){
	first = null;
	second = null;
	firstID = -1;
	secondID = -1;
	blockInput = false;
}

checkWin = function(){
	if(tiles == 40){
		alert("You won in " + (new Date().getTime() - time) / 1000 + " seconds! click OK to restart");
		location.reload();
	}
}