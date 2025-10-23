window.addEventListener('load', () => {

    // Obras destacadas
    fetch('datos/teatros.json')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('card-container');
            let count = 0;
            data.forEach(item => {
                count++;
                if (count >= 4) return;
                container.innerHTML += `
					<div class="col-12">
						<div class="row d-flex flex-row rounded-2 p-3 mb-5">
							<img src="${item.imagen}" class="img-fluid rounded-2 col-12 col-lg-6">
							<div class="col-12 col-lg-6 d-flex flex-column justify-content-between">
								<div>
									<h3 class="fw-bold mb-3">${item.titulo}</h3>
									<p class="mb-2"><b>Temática:</b> ${item.tematica}</p>
									<p class="mb-2"><b>Elenco:</b> ${item.elenco}</p>
									<p class="mb-4">
										<b>Descripción:</b><br>
										${item.descripcion}
									</p>
								</div>
								<button class="btn btn-card">Comprar Entradas</button>
							</div>
						</div>
					</div>
				`;
            });
        })
        .catch(err => console.error('error al cargar le JSON de teatros', err))
});