$(".wx").mouseover(function(){
	$(".weixin").css("display","block");
})
$(".wx").mouseleave(function(){
	$(".weixin").css("display","none");
})
$(".mfyya,.mfyyb,.mfyycf").click(function(){
	$(".mtk").css("display","block")
})
$(".close").click(function(){
	$(".mtk").css("display","none")
})
$(".gofh").click(function(){
	$("body,html").animate({scrollTop:0},1000);
})