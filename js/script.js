$("document").ready( () => {
    const key  = 'AIzaSyCmeBrcFiFrc1gpCbXb8JfOCh2ZNiN7MLM';
    $('#enviar').click( function(){
        let saida = $('#saida').val();
        let chegada = $('#chegada').val();
        console.log(saida);
        console.log(chegada);
       $.ajax({
           method:'GET',
           url:'https://maps.googleapis.com/maps/api/geocode/json?key=' + key + '&address=' + saida,
           async: true,
           success: function(response){
               let  latitude  = response.results[0].geometry.location.lat;
               let longitude = response.results[0].geometry.location.lng;
               sessionStorage.setItem("longSaida", longitude);
               sessionStorage.setItem("latdSaida",latitude);
               sessionStorage.setItem("enderecoSaida" , response.results[0].formatted_address);
           }
       });

       $.ajax({
           method:'GET',
           url:'https://maps.googleapis.com/maps/api/geocode/json?key=' + key + '&address=' + chegada,
           async: true,
           success: function(response){
               let  latitude  = response.results[0].geometry.location.lat;
               let longitude = response.results[0].geometry.location.lng;
               sessionStorage.setItem("longCheg", longitude);
               sessionStorage.setItem("latdCheg",latitude);
               sessionStorage.setItem("enderecoChegada" , response.results[0].formatted_address);

               window.location.href='rota.html';
           }
       });

    });
});
