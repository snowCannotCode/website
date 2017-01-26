//JavaScript Document

/*--------------------------------------------------------------------
-------------------------------NAMESPACE-----------------------------
-------------------------------------------------------------------*/
/******** div.portrait ********/
const DIV_portrait = (function(){
	let lay=$(".lay-out");
	let port=$(".portrait");
	let portLi=$(".portraitLi");
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
const SLIDE = (function(){
	let ul_img=$(".slide-img");
	let li_img=ul_img.children();
	let width=li_img.width();
	let length=li_img.length;
	let img_sli=li_img.find("img");
	// 顺便根据图片张数生成轮播点数
	let ul_dot=$(".dot-img");
	//根据li_img的张数来规定生成li_dot的个数后，插入ul_dot中
	let lihtml="";
	for(let dots=0;dots<length;dots++){
		lihtml +="<li></li>";
	}
	let li_dot = $(lihtml);
	li_dot.appendTo(ul_dot);
	//要对同 一个节点对象 使用 多个事件 的时候，使用bind（）方法；
	  let li_dots=ul_dot.children();

		return {
			//窗口发生变化时，重新定义轮播框，ul长度和img的宽高
			  imgInit:function(classN){
					const minWidth = 320; //Responsive 320px
					const maxWidth = 857; //Responsive 769px
					let div_slide=$(classN);
					//捕捉div_slide的宽度和高度
					let diW=div_slide.width();
					let diH=div_slide.height();
					let Hw=diH/diW;
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
						if(length<2) return;
				//注意这里的width是方法不是属性
							let n=0;
							width=li_img.width();
							//for循环，注意他每移动一个图片单位，for循环早已执行完，用n来实现li_dots的css变化
							for(let i=0;i<length;i++){
								ul_img.animate({"left":(0-width*i +"px")},2000,function(){
									li_dots.css({'background-position':'top left'});  //先让所有的li_dot的css回复原样，再让特定的li的background position变成top right；
									li_dots.eq(n++).css({'background-position':'top right'});
								}).delay(2000);
							}
					},
					//
					liDOtsClick:function(e){

						li_dots.on('mouseenter' ,function(){
						setTimeout(function(){clearInterval(e);},25);
						let dotsI=li_dots.index($(this));
						ul_img.css("left",0);
						ul_img.css({"left":(0-width*dotsI +"px")});
						li_dots.css({'background-position':'top left'});  //先让所有的li_dot的css回复原样，再让特定的li的background position变成top right；
						li_dots.eq(dotsI).css({'background-position':'top right'});
					});
				}
		};
})();



$(document).ready(function(){

/******** div.portrait ********/
DIV_portrait.AllAdd();
DIV_portrait.AllRemove();
/******** main ********/
/** .slide img_init **/



let slideStop = setInterval(function(){SLIDE.ulAnimate()},5000);
SLIDE.imgInit(".slide");
SLIDE.liDOtsClick(slideStop);

/** section.slide **/

//间隔调用slide_animate函数


});
