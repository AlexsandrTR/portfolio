$(function(){
	$('.carousel').carousel({
  interval: 5000
})
	 $("#myForm").validator({
  feedback: {
    success: 'glyphicon-ok',
    error: 'glyphicon-remove'
  }
   });  
$("#elastislide").elastislide();
 


})
$(window).load(function(){
	var caruselCeptionwidth = $("#carousel-example-generic .active img").width();
	//console.log(caruselCeptionwidth);
	$("#carousel-example-generic img").each(function(){
		$(this).attr('width', caruselCeptionwidth);
	});
	$('#carousel-example-generic .sidebar-carousel-caption').css('max-width', caruselCeptionwidth +'px');
	$('#carousel-example-generic .carousel-indicators').css('max-width', caruselCeptionwidth +'px');
	$('.baner').css('max-width', caruselCeptionwidth +'px');
	$('.about-baner').css('max-width', caruselCeptionwidth +'px');
})

 function setEqualHeight(columns) { 
     var tallestcolumn = 0; 
     columns.each( function() { 
      currentHeight = $(this).height(); 
      if(currentHeight > tallestcolumn) { tallestcolumn = currentHeight; } } ); 
      columns.height(tallestcolumn); 
     } 

     $(document).ready(function() { 
      setEqualHeight($(".product .product-desk")); 
      setEqualHeight($(".product .product-title")); 
      setEqualHeight($(".product .product-img"));  


  });

