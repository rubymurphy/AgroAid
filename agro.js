const homeLink = document.querySelector("#home-active");
const heroSection = document.querySelector(".hero-section");

console.log(window.location);
    
    // console.log(window.location, e.target);
    // (function () {
    //     const navlinks = document.querySelectorAll('.nav-bar ul a');
    //     navlinks.forEach(link => {
    //         console.log(window.location.pathname === link.getAttribute('href').split('/')[1], link.getAttribute('href'));
            
    //         if (window.location.pathname === link.getAttribute('href').split('/')[1]) {
    //             e.target.classList.add('active')
    //         }

    //     })
        
    // })()

    // (function () {
    //     var current = location.pathname.split('/')[1];
    //     if (current === "") return;
    //     var navlinks = document.querySelectorAll('.nav-bar ul a');
    //     for (var i = 0, len = navlinks.length; i < len; i++) {
    //         if (navlinks[i].getAttribute("href").indexOf(current) !== -1) {
    //             navlinks[i].className += "active";
    //         }
    //     }
    // })();
    
    function setActive() {
        var navlinks = document.querySelectorAll('.nav-bar ul a');
        for(i=0;i<linkObj.length;i++) { 
          if(document.location.href.indexOf(linkObj[i].href)>=0) {
            linkObj[i].classList.add("active");
          }
        }
      }
      
      window.onload = setActive;

// if{
//     heroSection.style.display= "block";
//     homeLink.style.color = "blue";
// }
// else{
//     homeLink.style.color = black;
// }