if (document.querySelector(".js-menu-open")) {
  let btnOpenMenu = document.querySelector(".js-menu-open");
  btnOpenMenu.addEventListener("click", function (evt) {
    evt.preventDefault();
    let navMenu = document.querySelector(".nav-menu")
    navMenu.classList.toggle("nav-menu--opened")
  })
}



let map;
const coordinates = {  lat: 59.938635,  lng: 30.323118};
function initMap() {
  map = new google.maps.Map(document.querySelector("#js-google-map"), {
    center: { lat: 59.939885, lng: 30.323118 },
    zoom: 15,
  });
  new google.maps.Marker({
    position: coordinates,
    map,
    title: "Мы здесь!",
    // content:"<h1 class="blog-content-link">mifomen</h1>",

    icon: "img/pin-on-map.svg",
    //   url:
    //   scaledSize: (window.isMobile)
    //           ? new google.maps.Size(20, 34)
    //           : new google.maps.Size(40, 68)
    // }
    draggable: false
  });

  if (document.querySelector('.js-hide-map')) {
    document.querySelector('.js-hide-map').classList.add("visually-hidden")
  }
}
