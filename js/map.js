
function initMap(mapWrapperElement, latitude , longitude , zoom ) {

  const myLatLng = {
    lat: latitude ,
    lng: longitude
  };

  const options = {
    center: myLatLng,
    zoom: zoom ? zoom : 8,
    mapTypeControl: false,
    panControl: false,
    zoomControl: false,
    streetViewControl: false,
  };
  const map = mapWrapperElement;
  mapa = new google.maps.Map(map, options);
  marcador = new google.maps.Marker({
    position: myLatLng,
    map: mapa,
    title: "Ubicacion seleccionada",
  })
  marcador.setVisible(false);
  if (longitude) {
    marcador.setVisible(true);
  }
}
function init() {
  let latitude = 19.19327698058583;
  let longitude = -70.49925453811595;
  let zoom = 18;
  const mapWrapper = document.getElementById('map');
  initMap(mapWrapper, latitude, longitude, zoom);
}
init();