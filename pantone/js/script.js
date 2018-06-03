jQuery(function($){
  var winH = window.innerHeight;
  console.log(winH);

  
  // 첫 페이지 화면에 꽉 차게 하기
  // var winH=$(window).height();
  // $('.main').height(winH);
  
  /* scrollSpy */
  // 사이드 네비에 페이지 개수만큼 네비 만들기
  var page = $('.page').length;
  var move = $('.move').length;
  for(var i=1; i<=page; i++){
    $('.srl_spy_area').append('<div class="srl_spy srl_spy_'+i+'"><a href="javascript:void(0);">'+i+'번째 페이지로 가기</a></div>');
  }
  // 페이지들 스크롤탑 배열 만들기
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
  
  // 스크롤했을 때 스크롤 스파이 부분에 클래스 추가
  $(window).on('scroll', function(){
    var docT=$(document).scrollTop();
    var X;
    for(i=0; i<page; i++){
      docT>=pageT[i]? X = i : false;
    }
    $('.srl_spy').removeClass('on');
    $('.srl_spy').eq(X).addClass('on');
//    console.log(event);
    // element transition
    for(i=0; i<move; i++){
      var idx=i+1;
      if(docT>=(moveT[i]-winH/4)){
        $('.move').removeClass('active');
        $('.move_'+idx).addClass('active');
      }
    }
  }).scroll();
  
  // 스크롤 스파이 클릭 했을 떄 스크롤 되는 것
  $(document).on('click','.srl_spy a',function(){
    var idx=$('.srl_spy a').index(this)+1;
    var pageN=$('.page_'+idx).offset().top;
    
    $('html, body').animate({scrollTop : pageN}, 300);
  });
  //click me!
  $('.page_down').on('click',function(){
    $('.srl_spy_2 a').trigger('click');
  });
	// star 시작

	var originalCircle = $('.star circle');

	for (var i = 0; i < 200; i++) { 
		
		var ran_x = Math.floor(Math.random() * (1000)); 
		var ran_y = Math.floor(Math.random() * (1000));
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
	// star 끝

  /* history tab */
  $('.history_tab .tab_nav .year').on('click',function(){
    n=$('.history_tab .tab_nav .year').index($(this));
    $(this).addClass('on').siblings().removeClass('on');
    $('.history_tab .tab_cnt').eq(n).addClass('on').siblings().removeClass('on');
  });

  $('.history_tab .tab_nav .year a').on('focus',function(){
  $(this).parent().addClass('on').siblings().removeClass('on');
  });


 
 // footer top
 $('footer').css({
   top:$(document).height()-50
 });
});