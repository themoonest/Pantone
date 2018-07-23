jQuery(function($){
var url="http://themoonest.com/pf/pantone"; 
var murl="http://themoonest.com/pf/pantone/m"; 
if(document.referrer.substring(0,url.length)!=url){
var mobileKeyWords = new Array('iPhone','iPod','iPad','BlackBerry','Android','Windows CE' ,'SAMSUNG','LG','MOT','SonyEricsson');
for (var word in mobileKeyWords){
if (navigator.userAgent.match(mobileKeyWords[word])!=null){
location.href=murl;
break;
}
}
};	
var winH = window.innerHeight;
var page = $('.page').length;
var move = $('.move').length;
for(var i=1; i<=page; i++){
$('.srl_spy_area').append('<div class="srl_spy srl_spy_'+i+'"><a href="javascript:void(0);">'+i+'번째 페이지로 가기</a></div>');
}
var pageT = [];
var moveT = [];
var moveH = [];
for(i=0; i<page; i++){
var idx=i+1;
pageT[i] = $('.page_'+idx).offset().top;
}
for(i=0; i<move; i++){
var idx=i+1;
moveT[i] = $('.move_'+idx).offset().top;
}  
for(i=0; i<move; i++){
var idx=i+1;
moveH[i] = $('.move_'+idx).height();
}
$(window).on('scroll', function(){
var docT=$(document).scrollTop();
for(i=0; i<move; i++){
var idx=i+1;
if(docT>=(moveT[i]-winH/4)){
$('.move').removeClass('active');
$('.move_'+idx).addClass('active');
}
}
var srl_n;
for(i=0; i<page; i++){
docT>=pageT[i]? srl_n = i+1 : false;
}
$('.srl_spy').removeClass('on');
$('.srl_spy_'+srl_n).addClass('on');
var spy_2_pg=$('.srl_spy_area');
if($(window).scrollTop()>=pageT[1]){
spy_2_pg.fadeIn();
} else {
spy_2_pg.fadeOut();
}
if($('.history').hasClass('active')){
if(!$('.tab_cnt').hasClass('on')){
$('.cnt_1').addClass('on');
}
}
}).scroll(); 
$(document).on('click','.srl_spy a',function(){
var idx=$('.srl_spy a').index(this)+1;
var pageN=$('.page_'+idx).offset().top;

$('html, body').animate({scrollTop : pageN}, 300);
});
//click me!
$('.page_down').on('click',function(){
$('.srl_spy_2 a').trigger('click');
});
var originalCircle = $('.star circle');
var st_W = $('.star_main').width()*2.5
var st_H = $('.star_main').height()*2.5
$('.star').css({
width: st_W,
height: st_H
});
for (var i = 0; i < 120; i++) { 
var ran_x = Math.floor(Math.random() * (st_W)); 
var ran_y = Math.floor(Math.random() * (st_H));
var ran_x_edit = ran_x+Math.floor(Math.random() * (10)); 
var ran_y_edit = ran_y+Math.floor(Math.random() * (10));  
var ran_time = Math.floor(Math.random() * (100))+3;
var clo = originalCircle.clone(); 
originalCircle.before(clo);
clo.attr({ 
'cx' : ran_x, 
'cy' : ran_y 
}); 
clo.find('animate').first().attr({ 
'values' : ran_x+"; "+ran_x_edit+"; "+ran_x+";",
'dur' : ran_time+'s' 
}); 
clo.find('animate').last().attr({ 
'values' : ran_y+"; "+ran_y_edit+"; "+ran_y+";",
'dur' : ran_time+'s' 
}); 
}
for (var i = 0; i < ($('.star circle').length)/5; i++){
var ran_time = Math.floor(Math.random() * (100))+3;  
$('.star circle').eq(i).attr({
'r' : '1.5',
'filter' : 'url(#blur)'});
$('.star circle').eq(i).addClass('kira');
}
var hst_tab=$('.history_tab .tab_nav .year');
hst_tab.on('click',function(){
var n=hst_tab.index($(this));
$(this).addClass('on').siblings().removeClass('on');
$('.history_tab .tab_cnt').eq(n).addClass('on').siblings().removeClass('on');
});
$('.history_tab .tab_nav .year a').on('focus',function(){
$(this).parent().addClass('on').siblings().removeClass('on');
});
$('footer').css({
top:$(document).height()-50
});
});