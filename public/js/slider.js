

//이벤트카드
$(document).ready(function() {
 $('.slider').slick({
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay:true,
     arrows:false,
     speed:1000,
     autoplaySpeed:4000,
     responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
       ]
   });
});