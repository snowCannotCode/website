//JavaScript Document

/*
*  函数例子1，animate函数
*  调用函数前先获得一个时间 start，
*  元素e，要匀速运动的时间 t 和经过的总路程 s,
*  函数体内定义一个调用函数的当前时间 now， now - start为元素e运动经过的时间
*  使用递归函数，规定每25毫秒反复调用animate函数，
*  如果时间到了，停止运动，返回到函数
*/
function shake(id,time,distance){

	if(typeof id === "string")
	var element = document.getElementById(id);
	var originCss = element.cssText;
	element.style.position = "relative";
	var start = (new Date()).getTime();
	 time = time||4000,distance = distance||5;
	animate();

	function animate(){
		var now =(new Date()).getTime();
		var elapsed = now - start;
		var fraction = elapsed/time;
		if(fraction<1){
			var x = distance*fraction;
			var y = x;
			element.style.left = x + "px";
			element.style.top = y + "px";
			element.style.opacity = 1-fraction;
			setTimeout(animate,Math.min(25,time-elapsed));
		}else {
			element.cssText = originCss;
		}
	}
}

/*
*  例子2，查找属性的方法
*  原理：通过原型链查找.
*  初始化对象，
*  用一个while循环，对该对象进行原型链上查找，如果当期的对象有这个属性，就返回这个对象。
*  否则继续找到他的原型，继续查找.
*/
Object.prototype.findOwnerOfProperty = function(propName){
	var currentObject = this;

	while(currentObject !==null ){
		if(currentObject.hasOwnProperty(propName))
			return currentObject;
		else currentObject = currentObject.__proto__;
	}
		alert("Sorry,no target object can be found.");
};


var portraitLi = document.getElementById("portraitLi");
var portrait = document.getElementById("portrait");
var portLayout = document.getElementById("lay-out");

portLayout.addEventListener('click',function(){
														portrait.style.visibility = 'hidden';
														portrait.style.opacity = 0;
														portrait.style.transform = "translate(-50%,1%)";

														portLayout.style.visibility = 'hidden';
														portLayout.style.opacity = 0;
},false);
portraitLi.addEventListener('click',function(){
														portrait.style.visibility = 'visible';
														portrait.style.opacity = 1;
														portrait.style.transform = "translate(-50%,5%)";

														portLayout.style.visibility = 'visible';
														portLayout.style.opacity = 1;
},false);
