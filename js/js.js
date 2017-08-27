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