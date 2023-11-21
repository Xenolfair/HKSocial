function guardarEnlace() {
    const enlaceImagen = document.getElementById('enlaceImagen').value;
    
    document.getElementById('enlaceImagen').value = '';
    
    let imagenesGuardadas = JSON.parse(localStorage.getItem('imagenes')) || [];
    const contenedorImagenes = document.getElementById('imagenesGuardadas');
    contenedorImagenes.innerHTML = '';

    imagenesGuardadas = [enlaceImagen];
    localStorage.setItem('imagenes', JSON.stringify(imagenesGuardadas));
    mostrarImagenesGuardadas();
}

function mostrarImagenesGuardadas() {
  const contenedorImagenes = document.getElementById('imagenesGuardadas');
  const imagenesGuardadas = JSON.parse(localStorage.getItem('imagenes')) || [];

  contenedorImagenes.innerHTML = '';

  if (imagenesGuardadas.length > 0) {
      const imagen = document.createElement('img');
      imagen.src = imagenesGuardadas[imagenesGuardadas.length - 1];
      contenedorImagenes.appendChild(imagen);
  } else {
      const imagenDefecto = document.createElement('img');
      imagenDefecto.src = 'https://jobsaca.com.cy/wp-content/uploads/2015/05/icon-user-default.png'; // Reemplaza con tu enlace por defecto
      imagenDefecto.alt = 'Enlace por defecto';
      contenedorImagenes.appendChild(imagenDefecto);
  }
}

mostrarImagenesGuardadas();
  