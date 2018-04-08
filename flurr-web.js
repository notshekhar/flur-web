document.querySelector(".content").style.width = window.innerWidth - document.querySelector(".right").getBoundingClientRect().width-document.querySelector(".left").getBoundingClientRect().width +"px";
document.querySelector(".bottom-search").style.width = document.querySelector(".right").getBoundingClientRect().width+"px";
document.querySelector(".spacing").style.width = document.querySelector(".right").getBoundingClientRect().width;
document.querySelector(".head").style.width = window.innerWidth-document.querySelector(".right").getBoundingClientRect().width+"px";
document.querySelector(".right-top").style.width = document.querySelector(".right").getBoundingClientRect().width+"px";
document.querySelector(".search-input-bottom").onfocus = function(){
  this.placeholder = "";
}
document.querySelector(".search-input-bottom").onblur = function(){
  if(this.value.length>0){
    this.placeholder = "";
  }else{
    this.placeholder = "Search";
  }
}
window.onresize = function(){
  document.querySelector(".head").style.width = window.innerWidth-document.querySelector(".right").getBoundingClientRect().width+"px";
  document.querySelector(".content").style.width = window.innerWidth - document.querySelector(".right").getBoundingClientRect().width-document.querySelector(".left").getBoundingClientRect().width +"px";

}
document.querySelector(".post-text").onfocus = function(){
  document.querySelector(".post-text").placeholder = "";
}
docement.querySelector(".post-text").onblur = function(){
  if(this.value>0){
    this.placeholder = "";
  }else{
    this.placeholder = "Write Something";
  }
}
