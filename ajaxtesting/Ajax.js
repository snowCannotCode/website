//JavaScript Document

function Tour(element,divC){
	var tour = this;
	this.el = element;
	this.divC = divC;
	this.el.on('click','.show.paris',function(){
		tour.divC.slideDown();
		$('.here').load('photos.html .photos .paris');   //加载html方法用load（）url里头可以使用css选择器
	});
	this.el.on('click','.show.london',function(){
		tour.divC.slideDown();
		$('.here').load('photos.html .photos .london');   //加载html方法用load（）
	});
	this.el.on('click','.hide',function(){
		tour.divC.slideUp();   //加载html方法用load（）
	});
}

$(document).ready(function(){
	var tourP=new Tour($('#tour'),$('.here'));
	
});
