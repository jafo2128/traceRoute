function initMap() {
    var localSaida = new google.maps.LatLng(sessionStorage.getItem("latdSaida") , sessionStorage.getItem("longSaida"));
    var localChegada = new google.maps.LatLng(sessionStorage.getItem("latdCheg") , sessionStorage.getItem("longCheg"));

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: localSaida
    });
    directionsDisplay.setMap(map);

    calculateAndDisplayRoute(directionsService, directionsDisplay);

    $('#endereco').append('Rota entre ' + sessionStorage.getItem("enderecoSaida") + ' até ' + sessionStorage.getItem("enderecoChegada"));
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var localSaida = new google.maps.LatLng(sessionStorage.getItem("latdSaida") , sessionStorage.getItem("longSaida"));
    var localChegada = new google.maps.LatLng(sessionStorage.getItem("latdCheg") , sessionStorage.getItem("longCheg"));

    directionsService.route({
        origin: localSaida,
        destination: localChegada,
        travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
            sessionStorage.removeItem("longSaida");
            sessionStorage.removeItem("latdSaida");
            sessionStorage.removeItem("enderecoSaida");
            sessionStorage.removeItem("enderecoChegada");
            sessionStorage.removeItem("latdCheg");
            sessionStorage.removeItem("longCheg");
        } else {
            $("document").html('<p> Não foi possível montar a rota </p>');
        }
    });
}

