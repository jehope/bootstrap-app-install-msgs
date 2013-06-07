var InstallAppPopover = (function() {

	function init() {

		if (window.navigator.standalone == true) {
			//here you could put an update message to reinstall the app from the web browser
            //or launch app from here if website and app are separate
    	}
    	else {   
        	if (navigator.userAgent.match(/iPad/i) != null) {
            	setupForIpad();
	        }
	        if (navigator.userAgent.match(/iPhone/i) != null) {
	        	setupForIphone();	           
	        }    
    	}
	}	

	function setupForIphone() {

		var popover_options = {
            placement: 'top',
            trigger: 'manual',
            container: 'body',
            html: 'true',
            title : '<i class="icon-share pull-left"></i> Install App '+
                    '<button type="button" id="close" class="close pull-right">&times;</button>',
            content : 'Add to Home Screen'
    	}	
    	$('body').popover(popover_options);
    	$('body').popover('show');
    	//style and postition settings
    	$('.popover').css({'top': window.innerHeight-($('.popover').height()+5),'z-index':100000});
    	$('.popover-title').css({'text-align':'center'});
    	$('.popover .close').css({'line-height':'14px'});
    	//close popover button
	    $('.popover .close').on('click',function(){
	        $('body').popover('hide');
	    });

	}
	function setupForIpad() {

		var popover_options = {
            placement: 'bottom',
            trigger: 'manual',
            container: 'body',
            html: 'true',
            title : '<i class="icon-share pull-left"></i> Install App '+
                    '<button type="button" id="close" class="close pull-right">&times;</button>',
            content : 'Add to Home Screen'
    	}	

    	$('body').popover(popover_options);
    	$('body').popover('show');
    	//style and postition settings
    	$('.popover').css({'top': 0, 'left':115,'z-index':100000});
    	$('.popover-title').css({'text-align':'center'});
    	$('.popover .close').css({'line-height':'14px'});
    	//close popover button
	    $('.popover .close').on('click',function(){
	        $('body').popover('hide');
	    });

	}
    init();
return { init : init };

})();