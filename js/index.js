
var first = null, second = null;
var tiles = 0;
var time = new Date().getTime();
var blockInput = false;

$(document).ready(function(){
	
    var ul = document.querySelector('ul');
    for (var i = ul.children.length; i >= 0; i--) {
      ul.appendChild(ul.children[Math.random() * i | 0]);
    }
	
	randomizeStartOffset();
	transitionToStartPosition();
    $('.front').dblclick(function(e){
		e.preventDefault();
	  });   
	  
	$(".front").click(function(){
		if(blockInput){
			return;
		}
		
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

randomizeStartOffset = function(){
	$(".front").each(function( index ) {$( this ).css({
		top: (Math.random() * 2 - 1) * 550, 
		left: (Math.random() * 2 - 1) * 550}) });
}

transitionToStartPosition = function(){
	if((new Date().getTime() - time) < 1000.0)
	{
		$(".front").each(function( index ) {
			var position = $( this ).position();
			$( this ).css({
				top: position.top * .85, 
				left: position.left * .85});
		});
		setTimeout(function() { transitionToStartPosition(); }, 16);
	}else{
		$(".front").each(function( index ) {$( this ).css({top: 0, left: 0}) });
	}
}


