function agregarConEnter(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        const userLocal = localStorage.getItem('loggedInUser');

        event.preventDefault();
        
        var comentario = document.getElementById('comentario').value;
        var nuevoComentario = document.createElement('p');
        nuevoComentario.textContent = userLocal + ": " + comentario;

        document.getElementById('comentarios').appendChild(nuevoComentario);

        document.getElementById('comentario').value = '';
    }
}