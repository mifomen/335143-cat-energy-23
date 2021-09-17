if (document.querySelector(".js-menu-open")) {
  let btnOpenMenu = document.querySelector(".js-menu-open");
  btnOpenMenu.addEventListener("click", function (evt) {
    evt.preventDefault();
    let navMenu = document.querySelector(".nav-menu")
    navMenu.classList.toggle("nav-menu--opened")
  })
}


// alert( window.innerWidth )
// alert( document.documentElement.clientWidth )
 var icon = "img/pin-on-map-mobile.svg"

 if (window.innerWidth >= 320) {
  icon = "img/pin-on-map-tablet.svg"
} else {
  icon = "img/pin-on-map-mobile.svg"
}

var center = {lat: 59.939885, lng: 30.323118}
 if (window.innerWidth >= 768) {
var center = {lat: 59.939885, lng: 30.313018}
} else {
  var center = {lat: 59.939885, lng: 30.323118}
}


let map;
const coordinates = {  lat: 59.938635,  lng: 30.323118};
function initMap() {
  map = new google.maps.Map(document.querySelector("#js-google-map"), {
    center: { lat: center.lat, lng: center.lng },
    zoom: 15,
  });
  new google.maps.Marker({
    position: coordinates,
    map,
    title: "Мы здесь!",
    // content:"<h1 class="blog-content-link">mifomen</h1>",

    // icon: "img/pin-on-map.svg",
    icon: icon,
    // icon: "default",
    //   url:
    //   scaledSize: (window.isMobile)
    //           ? new google.maps.Size(20, 34)
    //           : new google.maps.Size(40, 68)
    // }
    draggable: false,
  });

  if (document.querySelector('.js-hide-map')) {
    document.querySelector('.js-hide-map').classList.add("visually-hidden")
  }
}
