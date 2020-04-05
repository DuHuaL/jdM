// window.onload = function() {};页面中所有资源加载完成后执行
// $(function(){});页面中文档加载完成后，不需要等js css加载完成
// 入口函数
document.addEventListener('DOMContentLoaded',function() {
  new Search('.jd_header_box');
});
var Search = function(selector) {
  this.el = document.querySelector(selector);
  this.bannerHeight = document.querySelector('.jd_banner').offsetHeight;
  this.maxOpacity = 0.85;
  this.init(selector);
};
Search.prototype.init = function() {
  var that = this;
  // 业务逻辑
  // 1.完全透明
  that.el.style.background = 'rgba(216,80,92,0)';
  //2.当在轮播图以内滚动的时候，滚动的距离愈大，透明度愈多
  //3.当滚出轮播图以后，透明度固定在0.85
  window.onscroll = function() {
    //滚动的距离
    var scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
    //轮播图的高度
    that.bannerHeight;
    var opacity = 0;
    //判断
    if (scrollTop < that.bannerHeight) {
      opacity = scrollTop/that.bannerHeight*that.maxOpacity;
    } else {
      opacity = that.maxOpacity;
    }
    that.el.style.background = 'rgba(216,80,92,'+opacity+')';
  }

};