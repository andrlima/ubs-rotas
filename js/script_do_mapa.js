

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
    var area = new google.maps.InfoWindow({maxWidth: 200}); 

    const marcador_01 = new google.maps.Marker({
        position: {lat: -23.629633268963104, lng: -46.443601084655995},
        icon: "./img/m1.png",
        map: MAPA,
    });

    google.maps.event.addListener(marcador_01, 'click', function(){
        area.setContent('UBS Jardim Santo Andre');
        area.open(MAPA, marcador_01);
    });

    const marcador_02 = new google.maps.Marker({
        position: {lat: -23.516014406826468, lng: -46.42666694718037},
        icon: "./img/m1.png",
        map: MAPA,
    });

    google.maps.event.addListener(marcador_02, 'click', function(){
        area.setContent('UBS V Nova Curuca');
        area.open(MAPA, marcador_02);
    });

    const marcador_03 = new google.maps.Marker({
        position: {lat: -23.84960998296046, lng: -46.713132704843254},
        icon: "./img/m1.png",
        map: MAPA,
    });

    google.maps.event.addListener(marcador_03, 'click', function(){
        area.setContent('UBS Jardim Silveira ');
        area.open(MAPA, marcador_03);
    });

    const marcador_04 = new google.maps.Marker({
        position: {lat: -23.841451233810123, lng: -46.737120260906984},
        icon: "./img/m1.png",
        map: MAPA,
    });

    google.maps.event.addListener(marcador_04, 'click', function(){
        area.setContent('UBS Vila Roschel');
        area.open(MAPA, marcador_04);
    });

    const marcador_05 = new google.maps.Marker({
        position:  {lat: -23.77140728688326, lng: -46.7125889183375},
        icon: "./img/m1.png",
        map: MAPA,
    });

    google.maps.event.addListener(marcador_05, 'click', function(){
        area.setContent('UBS Jardim Campinas');
        area.open(MAPA, marcador_05);
    });

    const marcador_06 = new google.maps.Marker({
        position: {lat: -23.771309100731404, lng: -46.712567460665504},
        icon: "./img/m1.png",
        map: MAPA,
    });

    google.maps.event.addListener(marcador_06, 'click', function(){
        area.setContent('UBS Barragem');
        area.open(MAPA, marcador_06);
    });

    const marcador_07 = new google.maps.Marker({
        position: {lat: -23.53704140527539, lng: -46.59550715881983},
        icon: "./img/m1.png",
        map: MAPA,
    });

    google.maps.event.addListener(marcador_07, 'click', function(){
        area.setContent('UBS Belenzinho Marcus Wolosker');
        area.open(MAPA, marcador_07);
    });

    const marcador_08 = new google.maps.Marker({
        position:  {lat: -23.475611283193064, lng: -46.63037941649346},
        icon: "./img/m1.png",
        map: MAPA,
    });

    google.maps.event.addListener(marcador_08, 'click', function(){
        area.setContent('UBS Domingos M. C. Vila Aurora');
        area.open(MAPA, marcador_08);
    });

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