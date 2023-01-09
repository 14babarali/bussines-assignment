$(document).ready(function (){

$('.center').slick({
    centerMode: true,
    slidesToShow: 1, 
    arrows: false,
    autoplay: true,
  autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $( function() {
    $( "#accordion" ).accordion();
  } );




  $('#frm').validate(
    {
    rules : {
       
        email : {
            required: true,
            email:true
               }
       
    },


    messages : {
       
        email : {
            required: "enter an email",
            email:"enter a valid email"
               }
    },
})

    





})