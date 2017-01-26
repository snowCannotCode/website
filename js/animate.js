//JavaScript Document
let n=0;
let portraitLi=$('.portraitLi');
let lay_out=$('.lay-out');
let ulSlide=$('.slide-img');
let liSlide=$('.slide-img').children();
let slideCount=ulSlide.find('img').length;
let slideWidth=ulSlide.find('li').width();
let ulDot=$('.dot-img');

$(document).ready(function(){
	imgInit(ulSlide,slideCount);
	liSlide.last().prependTo(ulSlide);
  if(window.innerWidth <=450) ulSlide.css('margin-left',-window.innerWidth);
  else ulSlide.css('margin-left',-slideWidth);
	let liDot = '';
	for(let i=0;i<slideCount;i++){
		liDot +='<li></li>'
	}
	liDot=$(liDot);
	liDot.appendTo(ulDot);
	let liDots=ulDot.children();

	let loop=setInterval(function(){ulAnimate()},4000);
	$(window).resize(function(){
		clearInterval(loop);
		imgInit(ulSlide,slideCount);
	});
	portraitLi.click(function(){showPortrait()});
	lay_out.click(function(){hidePortrait()});
	
	liDots.on('click',function(){
			clearInterval(loop);
		let dot=liDots.index($(this));
		liDots.css('background-position','top left');
		$(this).css('background-position','top right');
		$('.slide-img').animate({'left':-slideWidth*(dot-1)},1000,function(){});
	});

});



function showPortrait(){
	$('.portrait').addClass('show');
	$('.lay-out').addClass('show');
}
function hidePortrait(){
	$('.portrait').removeClass('show');
	$('.lay-out').removeClass('show');
}
function imgInit(ul,count){
	let imgs = ul.find('img');
	const WIDTH = 450;
	const HEIGHT = 300;
	if(window.innerWidth <= WIDTH){
		let W= 320;
		let H= HEIGHT/WIDTH*W;

		 imgs.attr('width', W);
		 imgs.attr('height',H);
		 ul.width(count*W);
		 ul.height(H);
		 $('.slide').width(W);
		 $('.slide').height(H);
	}
}
function ulAnimate(slideW){
	if(!slideW) slideW = $('.slide-img').find('li').width();
	$('.slide-img').animate({'left':-slideW},1000,function(){
		$('.dot-img').children('li').css('background-position','top left');
		$('.dot-img').children('li').eq(++n).css('background-position','top right');
		$('.slide-img').find('li').first().appendTo('.slide-img');
		$('.slide-img').css('left','');
		if (n>slideCount-1) {
			n=0;  //前面用++n，如果不这么做会跳过 第一个dot，background-position不发生变化；
			$('.dot-img').children('li').eq(n).css('background-position','top right');
		}
	});


}
