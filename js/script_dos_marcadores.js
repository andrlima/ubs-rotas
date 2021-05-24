// Neste exemplo, centralizamos o mapa e adicionamos um marcador, usando um objeto LatLng
// literal em vez de um objeto google.maps.LatLng. Literais de objeto LatLng são
// uma maneira conveniente de adicionar uma coordenada LatLng e, na maioria dos casos, pode ser usada
// no lugar de um objeto google.maps.LatLng.
var marcador1 = new google.maps.Marker({
 // A linha abaixo é equivalente a escrever:
// posição: new google.maps.LatLng (-34.397, 150.644)
icon: 'img/marker.png',
position: { lat: -23.604936, lng: -46.692999 }, 
map: mapa,
});
 
 
// OS MARCADORES SEMPRE DEVE FICAR DENTRO DA FUNÇÃO QUE INICIA O MAPA.
// Uma vez que o objeto marcador é instanciado, seu
// position estará disponível como um objeto google.maps.LatLng. Nesse caso,
// recuperamos a posição do marcador usando o
// método google.maps.LatLng.getPosition() e mostra em uma caixinha na tela ao clicar nele.
const infowindow = new google.maps.InfoWindow({
content: "<p> Marcador local:" + marcador1.getPosition() + "</p>",
});

google.maps.event.addListener(marcador1, "click", () => {
infowindow.open(mapa, marcador1);
});


 
const marcador_01 = new google.maps.Marker({
    position: {lat: -23.629633268963104, lng: -46.443601084655995},
    title: 'São Paulo',
    icon: "./img/m1.png",
    map: MAPA,

});

    const marcador_02 = new google.maps.Marker({
    position: {lat: -23.516014406826468, lng: -46.42666694718037},
    icon: "./img/m1.png",
    map: MAPA,

    });
    const marcador_03 = new google.maps.Marker({
    position: {lat: -23.84960998296046, lng: -46.713132704843254},
    icon: "./img/m1.png",
    map: MAPA,

    });

    const marcador_04 = new google.maps.Marker({
    position: {lat: -23.841451233810123, lng: -46.737120260906984},
    icon: "./img/m1.png",
    map: MAPA,

    });
    const marcador_05 = new google.maps.Marker({
    position:  {lat: -23.77140728688326, lng: -46.7125889183375},
    icon: "./img/m1.png",
    map: MAPA,

    });
    const marcador_06 = new google.maps.Marker({
    position: {lat: -23.771309100731404, lng: -46.712567460665504},
    icon: "./img/m1.png",
    map: MAPA,

    });
    const marcador_07 = new google.maps.Marker({
    position: {lat: -23.53704140527539, lng: -46.59550715881983},
    icon: "./img/m1.png",
    map: MAPA,

    });
    const marcador_08 = new google.maps.Marker({
    position:  {lat: -23.475611283193064, lng: -46.63037941649346},
    icon: "./img/m1.png",
    map: MAPA,

    });