   // When the user clicks on the button, scroll to the top of the document
            function topFunction(){
              document.body.scrollTop = 0; // For Safari
              document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            }
          jQuery(document).ready(function(){
            mybutton = document.getElementById("myBtn");

            // When the user scrolls down 20px from the top of the document, show the button
            window.onscroll = function() {scrollFunction()};

                function scrollFunction() {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    mybutton.style.display = "block";
                } else {
                    mybutton.style.display = "none";
              }
          }

  });

  // Mean-menu media width

    jQuery('.mean-menu').meanmenu({ 
        meanScreenWidth: "991"
    });

  // Navbar Area sticky

  $(window).on('scroll', function() {
      if ($(this).scrollTop() >150){  
          $('.navigation-bar').addClass("sticky-nav");
      }
      else{
          $('.navigation-bar').removeClass("sticky-nav");
      }
    });

$(".shareIconsCount").jsSocials({
    url: "http://www.google.com",
    text: "Google Search Page",
    showCount: true,
    showLabel: false,
    shares: [
        { share: "facebook", via: "artem_tabalin", hashtags: "search,google" },
        "twitter",
        "googleplus",
        "linkedin",
        "stumbleupon",
    ]
});
