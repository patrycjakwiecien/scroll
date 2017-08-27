'use strict';

$(function() {
    $(window).scroll(function () {
        if ((window.innerHeight + window.scrollY) >= 
            document.body.offsetHeight) {
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/users',
                dataType: 'json',
                success: function(response) {
                    var beginOfData = document.createElement('p');
                    var endOfData = document.createElement('p');

                    beginOfData.innerHTML = '<br>-------- BEGIN OF DATA --------<br><br>';
                    endOfData.innerHTML = '<br>-------- END OF DATA --------<br><br>';

                    document.body.appendChild(beginOfData);
                    
                    //petla
                    
                   /* response.forEach(function(element){
                      var pUserId = document.createElement('p');  
                            var pUserName = document.createElement('p');  
                            var pUserURL = document.createElement('p');  
                        
                        pUserId.innerHTML = element.id;
                        pUserName.innerHTML = element.username;
                           pUserURL.innerHTML = element.website;
                        
                        document.body.appendChild(pUserId);
                        document.body.appendChild(pUserName);
                        document.body.appendChild(pUserURL);
                    });*/
                    
                    //koniec petli
                    
                    
                    //przyklady petli:
                    // for(wartosc poczatkowa licznika; warunek wykonywania(dopoki jest spelniony ); modyfikacja licznika),uzywamy kiedy znamy ilosc przebiegow, potrafimy zdefniowac warunek zakonczenia, length zraca od jeden elementy do wykonania, wykonaj petle i=0, sprawdz licznik i znowu wykonaj petle
                    
                   /* for( var i = 0; i < response.length i++) {
                        var pUserId = document.createElement('p');
                        
                        pUserId.innerHTML = response[i].id;
                        document.body.appendChild(pUserId);
                    } 
                    
                    //while(warunek wykonywania)
                    
                    var i = 0;
                    while(i < response.length){
                        var pUserId = document.createElement('p');
                        
                        pUserId.innerHTML = response[i].id;
                        document.body.appendChild(pUserId); i++
                        
                    }*/
                    
                    var i = 0;
                    
                    do {
                        var pUserId = document.createElement('p');
                        
                        pUserId.innerHTML = response[i].id;
                        document.body.appendChild(pUserId);
                        i++;
                        
                    } while(i < response.length);
                         
                    document.body.appendChild(endOfData);

                },
                onerror: function(error) {
                    console.log(error);

                }
            });
        }
    });
});



//offsetHeight-wysokosc wywolana na body, ile pikseli jest w body, ile zajmuje dany element
// innerHeight-wysokosc okna przegladarki, scrollY -  liczba pikseli o ile przesunelismy okno