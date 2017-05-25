"use strict";

jQuery(document).ready(function($){

	/************** Menu Content Opening *********************/
	$(".main_menu a, .responsive_menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$("#menu-container .content").hide();
		$("#menu-container #menu-"+id[1]).addClass("animated fadeInDown").show();
		$("#menu-container .homepage").hide();
		return false;
	});

	$(".main_menu a.home").addClass('active');

	$(".main_menu a.home, .responsive_menu a.home").click(function(){
		$("#menu-container .homepage").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.links, .responsive_menu a.links").removeClass('active');
		return false;
	});

	$(".main_menu a.links, .responsive_menu a.links").click(function(){
		$("#menu-container .links").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.home, .responsive_menu a.home").removeClass('active');
		
		loadScript();
		return false;
	});


	/************** LightBox *********************/
	$(function(){
		$('[data-rel="lightbox"]').lightbox();
	});


	$("a.menu-toggle-btn").click(function() {
	  $(".responsive_menu").stop(true,true).slideToggle();
	  return false;
	});
 
    $(".responsive_menu a").click(function(){
		$('.responsive_menu').hide();
	});

});


function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'callback=initialize';
  document.body.appendChild(script);
}
