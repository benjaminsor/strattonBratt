$(document).ready(function() {

	$('#loading').delay(2000).animate({'opacity':'0'}, function(){
		$(this).hide();
	});

	$('#loading hr').animate({'width':'20%'},300,function(){
		$(this).delay(1200).animate({'width':'50%'}, 500)
			
	});

	$.fn.fullpage({
		anchors: ['head', 'projects', 'about', 'blog', 'contact'],
		scrollingSpeed: 800,
		resize: false,
        easing: 'easeInQuart',
        menu: 'nav',
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        onLeave: function(index, direction){
            
            if(index == '1' && direction =='down'){
                $('#nav2').fadeIn();
                $('nav').fadeOut(800,function(){
                	$(this).css({'top':'0'}).slideDown();
                });
            }

            else if(index == '0' && direction == 'up'){
                $('#nav2').fadeOut();
                $('nav').fadeOut(800,function(){
                	$(this).css({'top':''}).slideDown();
                });
            }
        },   
        afterLoad: function(anchorLink){
            //using index
            if(anchorLink == 'projects'){
                $('nav').css({'top':'0'});
            }

            if(anchorLink == 'about'){
                $('nav').css({'top':'0'});
            }

            if(anchorLink == 'blog'){
                $('nav').css({'top':'0'});
            }

            if(anchorLink == 'contact'){
                $('nav').css({'top':'0'});
            }

            if(anchorLink == 'head'){
                $('nav').css({'top':''});
            }
        }, 
        afterRender: function(){

        	/*$('.pAbout p').hide();*/

        	/******************/

		   	/*$('.gallery').colorbox({rel: 'gal', maxWidth: '70%', maxHeight: '95%'});
		   	$('.gallery1').colorbox({rel: 'gal', maxWidth: '70%', maxHeight: '95%'});
		   	$('.gallery2').colorbox({rel: 'gal', maxWidth: '70%', maxHeight: '95%'});
		   	$('.gallery3').colorbox({rel: 'gal', maxWidth: '70%', maxHeight: '95%'});
		   	$('.gallery4').colorbox({rel: 'gal', maxWidth: '70%', maxHeight: '95%'});*/		  

			/******************/

			$('.x').click(function(){
		   		$(this).siblings('p').fadeToggle();
		   		$(this).fadeOut(1,function(){
		   			$(this).toggleClass('theX').fadeIn();
		   		});
		   		
		   	});

		   	$('.controlArrow').click(function(){
		   		$('.pTitle, .x').hide(1).delay(600).fadeIn(600);
		   		$('.pAbout p').show();
		   		$('.x').removeClass('theX');
		   	});

		   	/******************/

			$('.controlArrow.next').html('<h1 class="icon">></h1>');
			$('.controlArrow.prev').html('<h1 class="icon"><</h1>');

		} 


	});

	$('nav li a').hover(function(){
  		$(this).animate({'color':'#39b54a'}, 200);
  	}, function() {
  		$(this).animate({'color':''}, 200);
  	});

  	$('.icon, .controlArrow').hover(function(){
  		$(this).animate({'color':'#39b54a','border-color':'#39b54a'}, 200);
  	}, function() {
  		$(this).animate({'color':'','border-color':''}, 200);
  	});


});
