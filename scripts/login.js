// Login Form
var $8 = jQuery.noConflict();
$8(function() {
    var button = $8('#loginButton');
    var box = $8('#loginBox');
    var form = $8('#loginForm');
    button.removeAttr('href');
    button.mouseup(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() { 
        return false;
    });
    $8(this).mouseup(function(login) {
        if(!($8(login.target).parent('#loginButton').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});

// Menu customs
var $12 = jQuery.noConflict();
$12(document).ready(function() {
	// menu drop downs
	$12('ul.dropmenu').superfish();
	
	// tooltips
	$12('.preview').SMFtooltip();

	// find all nested linked images and turn off the border
	$12('a.bbc_link img.bbc_img').parent().css('border', '0');
});