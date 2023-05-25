const API_URL = 'http://127.0.0.1:3000';

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if (this.readyState === 4 && this.status === 200) {
        // 0 = UNSET, no se ha llamado al método open
        // 1 = OPENED, se ha llamado al método open
        // 2 = HEADERS_RECEIVED, se está llamando al método send()
        // 3 = LOADING, está cargando
        // 4 = DONE, se ha completado la operación
        const data = JSON.parse(this.response);
        const cardContainer = document.querySelector(".viajes-container");

        const cardsHTML = data.map(viaje => `
            <div class="card">
                <div class='card_header'>
                    <h1>${viaje[2]}</h1> 
                </div>
                <div class='card_body'>
                    ${viaje[3]}
                </div>
                <div class='card_fecha-salida'>
                        Fecha de salida: ${viaje[4]}
                </div>
                    <div class='card_fecha-llegada'>
                        Fecha de regreso: ${viaje[5]}
                    </div>
                <div class='card_footer'>
                    <div class='card__precio'>
                        Precio: ${viaje[6]}
                    </div>
                    <div class='card_cuposDisponibles'>
                        Cupos disponibles: ${viaje[7]}
                    </div>
                </div>
            </div>
        `);

        cardContainer.innerHTML = cardsHTML.join('');
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/obtenerViajes`);
xhr.send();
