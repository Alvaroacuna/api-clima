$(document).ready(function() {
        // your code here (build up your url)
        console.log("hola");
        $(document).on('click', '#enviar', function(){
            $.get("http://api.openweathermap.org/data/2.5/weather?q=Temuco&&appid=09130632bb4d41576b6ca778d9191a40&units=metric", function(data) {
                console.log(data);
                // your code here
                $('#info').html(
                    "<h1> Ciudad: "+ data.name + "</h1>" +
                    "<h2> País: "  + data.sys.country + "</h2>" +
                    "<h2> Coordenadas: "+ data.coord.lat +","+ data.coord.lon + "</h2>" +
                    "<h2> Clima: "+ data.weather[0].main + "</h2>" +
                    "<h2> Temperatura: "+ data.main.temp + "</h2>"
                );
            
            }, 'json');
            // don't forget to return false so the page doesn't refresh
        });
        return false;
    });