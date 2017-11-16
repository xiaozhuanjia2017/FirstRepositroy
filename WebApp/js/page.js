//当网页被加载完以后 就会触发ready()函数 表示已经准备好了
$(document).ready(function(){
	//当网页加载完毕的时候就会执行这个函数中的代码
	
	var pageindex=0;//当前页面下标 0代表第一页
	//找到有多个页  $(".page")找所有的.page的标签 
	//.size() 标签数组的个数
	var pageNum=$(".page").size();
	console.log(pageNum);
	
	//点击一张图片 切换成另外一张图片
	//点击事件
	$(".page4-light").click(function(){
		$(".page4-light").attr("src","img/lightOn.png");//改变src的属性值
	});
	
	//音乐播放器简单处理
    //获取音乐播放器
    var audio=document.getElementById("audio");
	$(".music").click(function(){
		if(audio.paused){
			//暂停状态 就播放在
			audio.play();//继续播放
			$(".music").attr("src","img/musicBtn.png");
		}else{
			//播放状态 就暂停
			audio.pause();//暂停
			$(".music").attr("src","img/musicBtnOff.png");
		}
	});
	

   
	
	
	
	
	//给.box选中的标签 设置触摸监听器
	$(".box").swipe({
		swipe:function(event,direct){
			console.log(direct);			
			if("up"==direct){
				//向上滑动 
				
				//页面下标加一
				pageindex++;
				//判断页面下标一定要在 0=<pageindex<=3
				if(pageindex<pageNum){
					//动画
					change();
				}else{
					//让下标指定到最后一页
					pageindex=pageNum-1;
				}
				
				
			}else if("down"==direct){
				//向下滑动 
				
				//页面下标 --
				pageindex--;
				if(pageindex<0){
					pageindex=0;
				}else{
					//动画
					change();
				}
			}
			
		}
	});
	
	function change(){
		$(".pages").animate({"top":-100*pageindex+"%"},1000,function(){
			
			if(pageindex==1){
				//当前是第二页展示
				//淡入效果
				console.log("--fadeIn--");
				$(".page2-bg").fadeIn(1000,function(){
					$(".page2-farm").animate({right:"1%"},1000,function(){
						$(".page2-it").animate({right:"1%"},1000);
					});
				});	
			}
			else if(pageindex==2){
				//展示第三页
				
				$(".page3-avatar").animate({right:"20%"},1000);
				$(".page3-bus").animate({left:"-60%"},2000);
			}
			
		});
	}
	
});

//jquery可以非常方便的 获取某个标签。
//$(".box") 选中.box指定的标签

var x=20;
var y="张三";
var arr=[1,2,3];//数组

function add(x,y){
	return x+y;
}

function xx(abc){
	abc();
}

xx(function(){
	console.log("--log--");
});

var sum=add(3,5);
console.log(sum);
