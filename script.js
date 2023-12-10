var keyTrans = {
	h: "F",
	j: "E/F#",
	k: "D",
	g: "B",
	f: "A/C",
	d: "G",
	l: "C"
};
var timer = 0;
var lastTime = 0;
var keyAllowed = {};

$(document).keydown(function(e) {
    if (keyAllowed [e.which] === false) return;
    keyAllowed [e.which] = false;
    $("#" + e.key).addClass('pressed');
	$('#data').prepend('[' + timer + '] ' + keyTrans[e.key] + '</b> key pressed. ' + (timer - lastTime) + 'ms since last change.<br />');
	lastTime = timer;
});

$(document).keyup(function(e) {
    keyAllowed [e.which] = true;
	$("#" + e.key).removeClass('pressed');
	$('#data').prepend('[' + timer + '] ' + keyTrans[e.key] + ' key released. ' + (timer - lastTime) + 'ms since last change.<br />');
	lastTime = timer;
});

$(document).focus(function(e) { 
    keyAllowed = {};
});

$(document).ready(function(){
	$('.key').each(function() {
        var divId = $(this).attr('id');
        $(this).text(keyTrans[divId] + ' (' + divId + ')');
    });
	
	setInterval(function(){timer++}, 1);
});