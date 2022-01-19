$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
 });

$('#close').hide()
$('#hamburger').click(function(){
  $('#close').show()
  $('#hamburger').hide()
})
$('#close').click(function(){
  $('#hamburger').show()
  $('#close').hide()
})

	/*------------------------------------
		Search bar
	--------------------------------------*/
	$('.open-search').on('click', function (event) {
		event.preventDefault();
		$('.search-area').addClass('active');
	});

	$('.search-close').on('click', function (event) {
		event.preventDefault();
		$('.search-area').removeClass('active');
  });
  
  