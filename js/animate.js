//JavaScript Document

$(Document).ready(function(){
/*--------------------------------------------------------------------------------
------------------------------------ div.portrait --------------------------------
--------------------------------------------------------------------------------*/
var lay=$(".lay-out");
var port=$(".portrait");
var portLi=$(".portraitLi");
portLi.on('click',function(event){
													event.stopPropagation();
													event.preventDefault();
													port.addClass("show");
													lay.addClass("show");
});
lay.on('click',function(event){
										event.stopPropagation();
										event.preventDefault();
										port.removeClass("show");
										lay.removeClass("show");
});
/*--------------------------------------------------------------------------------
------------------------------------ main ----------------------------------------
--------------------------------------------------------------------------------*/

/******* section.slide ********/
});
