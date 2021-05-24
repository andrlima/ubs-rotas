// Variáves 
const posicoes = [
  {lat: -23.629633268963104, lng: -46.443601084655995},
  {lat: -23.516014406826468, lng: -46.42666694718037},
  {lat: -23.84960998296046, lng: -46.713132704843254},
  {lat: -23.841451233810123, lng: -46.737120260906984},
  {lat: -23.77140728688326, lng: -46.7125889183375},
  {lat: -23.771309100731404, lng: -46.712567460665504},
  {lat: -23.53704140527539, lng: -46.59550715881983},
  {lat: -23.475611283193064, lng: -46.63037941649346},

];

// Função que inicia o mapa
function initMap() {

  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();    

  var iniLatLng = { lat: -23.585691, lng: -46.688499 };

  const MAPA = new google.maps.Map(document.getElementById("MAPA"), {
      mapTypeControl: false,
      center: iniLatLng,
      zoom: 14,

  });


  // Marcadores 
  const marcador_01 = new google.maps.Marker({
      position: iniLatLng,
      map: MAPA,

  });

  const marcador_03 = new google.maps.Marker({
    position:  {lat: -23.77140728688326, lng: -46.7125889183375},
    icon: "./img/m1.png",
    map: MAPA,

});

  

  // Crie uma matriz de caracteres alfabéticos usados ​​para rotular os marcadores..
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Adicione alguns marcadores ao mapa..
  // Observação: o código usa o método JavaScript Array.prototype.map() para
  // crie uma matriz de marcadores com base em uma determinada matriz de "locais".
  // O método map () aqui não tem nada a ver com a API do Google Maps.
  const marcador_02 = posicoes.map((location, i) => {
      return new google.maps.Marker({
          position: location,
          label: labels[i % labels.length],

      });
      
  });



  // Adicione um agrupador de marcadores para gerenciar os marcadores.
  // Essa bibioteca precisa ser importada para o projeto, ela não faz parte da API do google maps
  // @ ts-ignore MarkerClusterer definido via script
  new MarkerClusterer(MAPA, marcador_02, {
      imagePath: "../img/m1.png",
      
  });

      //Instanciando uma variável do pacote MarkerClusterer
      var markerCluster = new MarkerClusterer(MAPA, marcador_02, {imagePath: `${path}/m`});

  //--> FIM DOS MARCADORES <--


  // Crie uma tag <script> e defina o URL USGS como a fonte.
  const script = document.createElement("script");
  directionsRenderer.setMap(MAPA);
  const onChangeHandler = function () {
      calcularRota(directionsService, directionsRenderer);

  };

  //Pega os campo no html
  document.getElementById("origem").addEventListener("change", onChangeHandler);
  document.getElementById("destino").addEventListener("change", onChangeHandler);
  
}

//Função para calcular a rota
function calcularRota(directionsService, directionsRenderer){
  directionsService.route({
      origin: { query: document.getElementById("origem").value, },
      destination: { query: document.getElementById("destino").value, },
      travelMode: google.maps.TravelMode.DRIVING,

  },
      (response, status) => {
          if(status === "OK"){
              directionsRenderer.setDirections(response);

          }
          else{
              window.alert("Não foi possível traça uma rota para esse destino, teve " + status + "!");
          }

      }   
  
  );

}