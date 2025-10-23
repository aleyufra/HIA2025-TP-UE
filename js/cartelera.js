window.addEventListener('load', () => {

    // Cartelera completa
    fetch('/datos/teatros.json')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('card-container');
            data.forEach(item => {
                container.innerHTML += `
					<div class="col-12 col-md-6 col-lg-4 mb-3">
						<div class="d-flex flex-column justify-content-between p-3 h-100">
						    <div>
                                <img src="${item.imagen}" class="img-fluid mb-3 rounded img-card">
                                <h3 class="fw-bold">${item.titulo}</h3>
                                <p class="mb-2"><b>Temática:</b> ${item.tematica}</p>
                                <p class="mb-2 elenco"><b>Elenco:</b> ${item.elenco}</p>
                                <p class="descripcion mb-4"><b>Descripción:</b><br>${item.descripcion}</p>
                            </div>
                            <button class="btn btn-card">Comprar Entradas</button>
						</div>
					</div>
				`;
            });
        })
        .catch(err => console.error('error al cargar le JSON de teatros', err))
});