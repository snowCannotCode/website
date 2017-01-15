//首页头部轮播
(function($){
	$(document).ready(function (){
		var si=$('.slide_in');
		if(si.length<1) return;
		si.each(function (){
			var s=$(this).children('.slide');
			if(s.length<1) return;
			var ul=s.children('ul');
			if(ul.length<1) return;
			var li=ul.children('li');
			if(li.length<2) return;
			var html='<div class="slide_dot"><ul>';
			for(var $i=0;$i<li.length;++$i){
				html+='<li></li>';
			}
			html+='</ul></div>';
			s.after(html);
			var dot=s.siblings('.slide_dot');
			if(dot.length<1) return;
			var dotli=dot.find('li');
			dotli.eq(0).addClass('current');
			ul.attr('data-eq',1);
			slide_init(s);
			$(window).on('resize',function (){
				ul.stop(true,true);
				slide_init(s);
			});
			var delay=5000;
			var ul_cls='start_slide';
			var loop=setInterval("slide_animate('"+ul_cls+"')",delay);
			$(this).hover(function (){
				ul.stop(true,true);
				ul.removeClass(ul_cls);
			},function (){
				ul.addClass(ul_cls);
			});
			var ul_dot_cls='slide_hasdot';
			ul.addClass(ul_dot_cls);
			dotli.on('click',function (){
				slide_animate(ul_dot_cls,dotli.index($(this)));
				return false;
			});
		});
	});
	function slide_init(s){
		var cl=document.documentElement.clientWidth;
		var img_w=1920;
		var img_h=410;
		var cont_w=1200;
		if(s.length<1) return;
		var ul=s.children('ul');
		if(ul.length<1) return;
		var li=ul.children('li');
		if(li.length<2) return;
		var h=img_h;
		li.width(cl);
		if(cl<=cont_w) {
			h=img_h*(cl/cont_w);
		}
		li.height(h);
		var img=li.find('img');
		img.height(h);
		var w=img_w*(h/img_h);
		img.width(w);
		img.css('margin-left',0-w/2);
		s.height(h);
		ul.width(li.width()*li.length);
	}
})(jQuery);
//轮播动画函数
function slide_animate(ul_cls,target_eq){
	var ul=$('.'+ul_cls);
	if(ul.length<1) return;
	ul.stop(true,true);
	var li=ul.children('li');
	if(li.length<2) return;
	var step=li.width();
	var eq=ul.attr('data-eq');
	if(target_eq>=0) eq=target_eq;
	ul.animate({
		'left':0-step*eq
	},500,function (){
		var dotli=ul.parent().siblings('.slide_dot').find('li');
		dotli.removeClass('current');
		dotli.eq(eq).addClass('current');
		eq++;
		if(eq>=li.length) eq=0;
		ul.attr('data-eq',eq);
	});
}

//头部导航移动端按钮
(function($){
	var a=$('.toggle-menu');
	if(a.length<1) return;
	var p=$('.primary-nav');
	if(p.length<1) return;
	var cls='hide-768';
	a.on('click',function (){
		if(p.hasClass(cls)){
			p.removeClass(cls);
		}else{
			p.addClass(cls);
		}
		return false;
	});
	$(document).on('click',function (e){
		if($(e.target).parents('.primary-nav').length==0){
			p.addClass(cls);
		}
	});
})(jQuery);
