/* 
  La Asincronía es uno de los pilares fundamentales de JavaScript, ya que es un lenguaje de programacion de un solo subproceso o hilo, lo que significa que solo puede ejecutar una cosa a la vez.

  Si bien los lenguajes de un solo hilo simplifican la escritura de codigo por que no tienen que preocuparse por los problemas de concurrencia, esto tambien significa que no puede realizar operaciones largas como el acceso a la red sin bloquear el hilo principal.

   Ajax significa JavaScript asíncrono y xml (Asynchronus JavaScript and Xml). Es un conjunto de técnicas de desarrollo web que permiten que las aplicaciones web funcionen y que envien y recuperen datos de un servidor, sin tener que recargar una pagina web.
*/

function leerArchivo() {
    const url = 'datos.json';
    const http = new XMLHttpRequest();  // Objeto para configurar la petición
    http.open('GET', url); // método GET para obtener el archivo
    http.onreadystatechange = function () { // función que procesa la respuesta
        if (this.readyState == 4 && this.status == 200) {
            let resultado = JSON.parse(this.responseText); // recupera la respuesta en un objeto Javascript
            let tabla = document.querySelector("#lista");            
            let row, col1, col2;
            console.log(resultado);

            /* Se añade título de la tabla */            
            
            resultado.forEach(objeto => {           
                row = document.createElement('tr');     
                col1 = document.createElement('td');
                col2 = document.createElement('td');
                col1.innerHTML=`${objeto.user}`;
                col2.innerHTML=`${objeto.email}`;
                row.appendChild(col1);
                row.appendChild(col2);
                tabla.appendChild(row);
            });
            
        }
    };
    http.send();
}
