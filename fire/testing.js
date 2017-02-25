//JavaScript Document



//主要重点是 Math.random()*(max-min)+min;
function rand(max,min){
  return Math.floor(Math.random()*(max-min))+min;
}
function randInt(max,min){
  return Math.random()*(max-min)+min;
}

const frontFire=document.getElementById('front');
const midFire=document.getElementById('mid');
const backFire=document.getElementById('back');

function FireParticle(zIndex){
  if(zIndex === "front") {
    this.width = rand(15,2);
    this.left = randInt(51,50);
    this.bottom = randInt(10,0);
    this.marginLeft = -this.width/2;
    this.time = randInt(0.2,0.1);
  }else if(zIndex === 'mid'){
    this.width = rand(25,15);
    this.left = randInt(51,50);
    this.bottom = randInt(10,0);
    this.marginLeft = -this.width/2;
    this.time = randInt(0.5,0.3);
  }else{
    this.width = rand(30,25);
    this.left = randInt(51,50);
    this.bottom = randInt(10,0);
    this.marginLeft = -this.width/2;
    this.time = randInt(0.5,0.3);
  }
  this.html='<span style="width:'+this.width+'px;height:'+this.width+'px;left:'+this.left+'%;bottom:'+this.bottom+'px;margin-left'+this.marginLeft+'px;animation-duration:'+this.time+'s;animation-delay:'+this.time/2+'s"></span>'
}


function flameing(zIndex,ele,max,min){
  var num=rand(max,min);
  var Num=[];
  while(Num.length<num){
    var FirePs=new FireParticle(zIndex);
    Num.push(FirePs);
    ele.innerHTML += FirePs.html;
  }
}

flameing('front',frontFire,15,10);
flameing('mid',midFire,15,10);
flameing('back',backFire,15,10);
