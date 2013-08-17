// variables
smWid = 89; // width for hidden
sumWid = 903; // width for continer

jQuery(document).ready(function(){
	accordion('.slider_wrapper', '.slider_image','.accordion_text');
 
});
function accordion(s,im,tx){
	num = jQuery(s+' li').size();
	actWid = Math.ceil(sumWid-(num-1)*smWid);
	defWid = Math.ceil(sumWid/num);
	
	activeItem = jQuery(s+' li:last');
	jQuery(im).width(actWid);
	jQuery(s+' li').animate({width:defWid}, {duration:500, queue:false});
	cT = setTimeout(function(){},0);
	
	jQuery(s+' li').hover(function(){
		clearTimeout(cT);
		c= jQuery(this).find(tx);
		c.animate({bottom:-200},500).animate({bottom:0},300);
		cT = setTimeout(function(){
			c.addClass('slider_act');
		},500);
		jQuery(s+' li').animate({width:smWid}, {duration:500, queue:false});
		jQuery(this).animate({width:actWid}, {duration:500, queue:false});
		activeItem = this;
	});
	jQuery(s+' li').mouseleave(function(){
		c= jQuery(this).find(tx);
		clearTimeout(cT);
		c.animate({bottom:-200},500).removeClass('slider_act').stop(true,true).animate({bottom:0},300);
	});
	jQuery(s).mouseleave(function(){
		jQuery(s+' li').animate({width:defWid}, {duration:500, queue:false});
	});
}