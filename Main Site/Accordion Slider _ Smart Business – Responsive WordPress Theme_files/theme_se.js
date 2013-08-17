jQuery(document).ready(function() {
	//hideSettings();
	// show 
	jQuery('#show_settings_button').click(function(e) {
		showSettings();
	});
	// hide
	jQuery('#hide_settings_button').click(function(e) {
		hideSettings();
	});
});
function showSettings(){
	jQuery('.theme_settings_container').stop(true,false).animate({left:0,opacity:1});
}
function hideSettings(){
	jQuery('.theme_settings_container').stop(true,false).animate({left:-200,opacity:0});
}