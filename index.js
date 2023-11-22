class Libro {
    constructor(titulo, genero, autor) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = autor;
        this.leido = false;
        this.fechaLectura = null;
    }
  }

  const listaDeLibros = [];

  function marcarComoLeido(index) {
      const libroLeido = listaDeLibros[index];

      if (libroLeido) {
          libroLeido.leido = true;
          libroLeido.fechaLectura = new Date();

          document.getElementById('tablaLibrosLeidos').style.display = 'table';
          const tablaLibrosLeidos = document.getElementById('tablaLibrosLeidos');
          const fila = tablaLibrosLeidos.insertRow(-1);
          const tituloCell = fila.insertCell(0);
          const generoCell = fila.insertCell(1);
          const autorCell = fila.insertCell(2);
          const fechaCell = fila.insertCell(3);
          tituloCell.textContent = libroLeido.titulo;
          generoCell.textContent = libroLeido.genero;
          autorCell.textContent = libroLeido.autor;
          fechaCell.textContent = libroLeido.fechaLectura ? libroLeido.fechaLectura.toLocaleDateString() : 'No leído';

          const libroActual = listaDeLibros.find((libro) => !libro.leido);
          if (libroActual) {
              document.querySelector('.libro h2').textContent = libroActual.titulo;
              document.querySelector('.libro p:nth-child(3)').textContent = `Autor: ${libroActual.autor}`;
              document.querySelector('.libro p:nth-child(4)').textContent = `Leído: ${libroActual.leido ? 'Sí' : 'No'}`;
              document.querySelector('.libro p:nth-child(5)').textContent = `Fecha de Lectura: ${libroActual.fechaLectura ? libroActual.fechaLectura.toLocaleDateString() : 'No leído'}`;
          }
      }
  }

  const libro1 = new Libro('Libro 1', 'Comedia', 'Pablo');
  const libro2 = new Libro('Libro 2', 'Terror', 'Jorge');
  const libro3 = new Libro('Libro 3', 'Ficción', 'José');

  listaDeLibros.push(libro1, libro2, libro3);