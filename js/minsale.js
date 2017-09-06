$(function () {
	
	function tabChange (floor) {
		var headLiStr = "."+ floor + "_tab_headul li",
		    floorContentStr = "." + floor + "_tab",
		    insideLiStr = "." + floor + "_tab.current ."+ floor + "-indicator li",
		    brandContentStr = "." + floor + "_tab.current .z-floor-tab-con",
		    totalLi = "." + floor + "-indicator li",
		    totalContent = ".z-floor-tab-con";
		    
		var headLi = $(headLiStr),
			floorContent = $(floorContentStr),
			insideLi = $(insideLiStr),
			brandContent = $(brandContentStr);
		//初始化点击
		tabClick(insideLi,brandContent);
		
		tabSwith(headLi, floorContent, insideLi, brandContent,totalLi,totalContent);
	}
	//1F
	tabChange("f1");
	tabChange("f2");
	tabChange("f3");
	tabChange("f4");
	tabChange("f5");
	tabChange("f6");
	
	
	/* 楼层内部切换	 
	 * fCheck 楼层切换函数
	 * headLi 每一楼标题的li元素
	 * floorContent 每个标题对应的主体内容
	 * insideLi 含有current类名的商标里的每一个li
	 * brandContent 含有current类名的商标里的每一项
	 * totalLi 所有商标里的每一个li
	 * totalContent 所有商标里的每一项
	 * 
	 * */
	function tabSwith (headLi, floorContent, insideLi, brandContent,totalLi,totalContent) {
   		floorContent.hide().eq(0).show().addClass("current");
	   	floorContent.find(totalContent).hide().eq(0).show();
	    //标题 内容 切换
			headLi.click(function(){
				var index = $(this).index();
	   			floorContent.eq(index).find(totalContent).hide().eq(0).show();
	     		headLi.removeClass('active');
	     		floorContent.removeClass("current");
		    	$(this).addClass('active');
				floorContent.hide().eq(index).show().addClass("current");
				brandContent.hide().eq(0).show();
				insideLi.removeClass('active').eq(0).addClass('active');
				//外层切换后 商标再切换
				var ele = floorContent.eq(index).find(totalLi),
					content = floorContent.eq(index).find(totalContent);
				tabClick(ele,content);
		});
	};
	   

	//点击tab切换
	function tabClick (ele, content) {
		ele.click(function(){
   	 	ele.removeClass('active');
   	 	$(this).addClass('active');
	    var index = $(this).index();
		content.hide().eq(index).show();
   	});
	}
	
	
	//5星切换
	$(".m-five .g-row").hide().eq(0).show();
   	tabClick($(".five-star span"),$(".m-five .g-row"));
   	 
   	 //二级导航显示隐藏
    $('.m-categorys').hover(function(){
    	$('.m-meun').addClass('show');
    },function(){
    	$('.m-meun').removeClass('show');
    });
    $('.m-meun .m-itme').hover(function(){
    	$(this).addClass('active');
    },function(){
    	$(this).removeClass('active');
    })
    
    $('.m-user').hover(function(){
    	$(this).addClass('active');
    },function(){
    	$(this).removeClass('active');
    })
    
    $('.m-meun .m-three li').hover(function(){
    	 $(this).addClass('active');
    },function(){
    	$(this).removeClass('active');
    })
   	 
   	  //购物车
    $(".m-cart").hover(function(){
    	$(this).addClass('active');
    },function(){
    	$(this).removeClass('active');
    });
    
    //搜商品
	let flag = true;
	$("#product").on("click", function () {
		flag ? $("#product-ul").show() : $("#product-ul").hide();
		flag = !flag;
	});
	
	$("#product-ul").children().each(function (i, value) {
		$(value).on("click", function (e) {
			$("#product-span").html(this.innerHTML);
			$("#product-ul").hide();
			flag = !flag;
			window.event? window.event.cancelBubble = true : e.stopPropagation();
		});
	});
});
