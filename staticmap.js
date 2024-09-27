let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 21.814326449341447, lng: -102.76976863232528 },
    zoom: 15,
  });
}

 -102.76976863232528

initMap();