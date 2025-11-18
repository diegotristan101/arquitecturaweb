const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const seccion = urlParams.get('seccion');
    
 
    if (seccion) {
        fetch(`${seccion}.html`)
            .then(response => response.text())
            .then(html => {
                let contenidoDiv = document.getElementById('contenido');
                contenidoDiv.innerHTML = html;
            });
    }