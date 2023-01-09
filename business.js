$({ Counter: 0 }).animate({
    Counter: $('.Single').text()
  }, {
    duration: 1000,
    easing: 'swing',
    step: function() {
      $('.Single').text(Math.ceil(this.Counter));
    }
  });   

  $({ Counter: 0 }).animate({
    Counter: $('.tingle').text()
  }, {
    duration: 1000,
    easing: 'swing',
    step: function() {
      $('.tingle').text(Math.ceil(this.Counter));
    }
  });   

  $({ Counter: 0 }).animate({
    Counter: $('.ringle').text()    
  }, {
    duration: 1000,
    easing: 'swing',
    step: function() {
      $('.ringle').text(Math.ceil(this.Counter));
    }
  });   

  $({ Counter: 0 }).animate({
    Counter: $('.pingle').text()
  }, {
    duration: 1000,
    easing: 'swing',
    step: function() {
      $('.pingle').text(Math.ceil(this.Counter));
    }
  });   

  $('.solid').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true

  });

  $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 100,
    autoplay:true,
    slidesToShow: 4, 
    slidesToScroll: 1,
    
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $(document).ready(function() {
    $("#is").validate({
      rules : {
        zname:'required',
        password:{
          required:'true',
          minlength:4,
        },
        number:'required'
      },
      messages : {
        zname:'This field is required',
        password:{
          required:'provide a password',
          minlength:'password should be aleast 4 characters',
        },
        number:'This field is required'
      }
    });
    
 });
