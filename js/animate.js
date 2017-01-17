//JavaScript Document

/*--------------------------------------------------------------------
-------------------------------NAMESPACE-----------------------------
-------------------------------------------------------------------*/
/******** div.portrait ********/
var DIV_portrait = (function(){
	var lay=$(".lay-out");
	var port=$(".portrait");
	var portLi=$(".portraitLi");
	return	{AllAdd:function(){
										portLi.on('click',function(event){
												event.stopPropagation();event.preventDefault();
												port.addClass("show");lay.addClass("show");
							});
						},
					 AllRemove:function(){
										lay.on('click',function(event){
																	event.stopPropagation();event.preventDefault();
																	port.removeClass("show");lay.removeClass("show");
							});
						}
					}
})();
/******** main ********/
/** .slide img_init **/
var SLIDE = (function(){
	var ul_img=$(".slide-img");
	var li_img=ul_img.children();
	var img_sli=li_img.find("img");
	// 顺便根据图片张数生成轮播点数
	var ul_dot=$(".dot-img");
	//根据li_img的张数来规定生成li_dot的个数后，插入ul_dot中
	for(var dots=0;dots<li_img.length;dots++){
		var li_dot=$("<li></li>");
		li_dot.appendTo(ul_dot);
	//要对同 一个节点对象 使用 多个事件 的时候，使用bind（）方法；
		li_dot.bind({
			mouseenter : function(){$(this).css({'background-position':'top right'});},
			mouseleave : function(){$(this).css({'background-position':'top left'});}
		});
	}
		return{
			//窗口发生变化时，重新定义轮播框，ul长度和img的宽高
			  imgInit:function(classN){
					var minWidth = 320; //Responsive 320px
					var maxWidth = 857; //Responsive 769px
					var div_slide=$(classN);
					//捕捉div_slide的宽度和高度
					var diW=div_slide.width();
					var diH=div_slide.height();
					var Hw=diH/diW;
					if(maxWidth>=window.innerWidth){
						div_slide.width(minWidth);
						div_slide.height(Hw*diH);
						img_sli.width(minWidth);  //只改图片宽度，图片的高度会随之自动修改；
						ul_img.width(minWidth*3);
						ul_img.height(Hw*diH);
					}
				},
				//slide_animate函数
					ulAnimate:function(){
				//要有两张图片以上才可以轮播
						if(li_img.length<2) return;
				//注意这里的width是方法不是属性
						var len=li_img.width(),i;
						for(i=0;i<li_img.length;i++){
							ul_img.animate({"left":(0-len*i +"px")},1000,function(){}).delay(2000);
						}
					}
		}
})();



$(document).ready(function(){

/******** div.portrait ********/
DIV_portrait.AllAdd();
DIV_portrait.AllRemove();
/******** main ********/
/** .slide img_init **/




SLIDE.imgInit(".slide");


/** section.slide **/

//间隔调用slide_animate函数
setInterval(SLIDE.ulAnimate,4000);


});
