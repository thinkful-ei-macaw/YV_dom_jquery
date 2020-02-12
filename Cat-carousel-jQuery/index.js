$('.thumbnail').on('click', e => {

  
  let url=$(e.target).attr('src');

  let altUrl = $(e.target).attr('alt');

  console.log(e.target); //what clicked on
  console.log(e.currentTarget); //what event is bound to
  $('.hero img').attr('src', url); // img all images in hero class
  $('.hero img').attr('alt', altUrl);



  

});


