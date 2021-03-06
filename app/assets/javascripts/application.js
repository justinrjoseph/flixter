// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require_tree .
//= require jquery-ui
$(function() {
    $('.lessons').sortable({
    	update: function( event, ui ) {
    		$.ajax({
    			type: 'PUT',
    			url: ui.item.data('update-url'),
    			dataType: 'json',
    			data: { lesson: { row_order_position: ui.item.index() } }
    		});
    	}
    });
    
    $('.sections').sortable({
    	update: function( event, ui ) {
    		$.ajax({
    			type: 'PUT',
    			url: ui.item.data('update-url'),
    			dataType: 'json',
    			data: { section: { row_order_position: ui.item.index() } }
    		});
    	}
    });
    
    $('.new-lesson-btn').click(function(e) {
    	var lesson_url = $(e.target).data('lesson-url');
    	$('#new-lesson-form').attr('action', lesson_url);
    });
});