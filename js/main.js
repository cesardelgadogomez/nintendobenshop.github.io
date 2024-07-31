// PRODUCTOS
const productos = [
  // Accesorios
  {
      id: "accesorio-01",
      titulo: "Accesorio 01",
      imagen: "./img/accesorios/01.png",
      categoria: {
          nombre: "Accesorios",
          id: "accesorios"
      },
      precio: 1000
  },
  {
    id: "accesorio-02",
    titulo: "Accesorio 02",
    imagen: "./img/accesorios/02.png",
    categoria: {
        nombre: "Accesorios",
        id: "accesorios"
    },
    precio: 1000
  },
  {
    id: "accesorio-03",
    titulo: "Accesorio 03",
    imagen: "./img/accesorios/03.png",
    categoria: {
        nombre: "Accesorios",
        id: "accesorios"
    },
    precio: 1000
  },
  {
    id: "accesorio-04",
    titulo: "Accesorio 04",
    imagen: "./img/accesorios/04.png",
    categoria: {
        nombre: "Accesorios",
        id: "accesorios"
    },
    precio: 1000
  },
  {
    id: "accesorio-05",
    titulo: "Accesorio 05",
    imagen: "./img/accesorios/05.png",
    categoria: {
        nombre: "Accesorios",
        id: "accesorios"
    },
    precio: 1000
  },
  // Celulares
  {
    id: "celular-01",
    titulo: "Celular 01",
    imagen: "./img/celulares/01.png",
    categoria: {
        nombre: "Celulares",
        id: "celulares"
    },
    precio: 1000
  },
  {
    id: "celular-02",
    titulo: "Celular 02",
    imagen: "./img/celulares/02.png",
    categoria: {
        nombre: "Celulares",
        id: "celulares"
    },
    precio: 1000
  },
  {
    id: "celular-03",
    titulo: "Celular 03",
    imagen: "./img/celulares/03.png",
    categoria: {
        nombre: "Celulares",
        id: "celulares"
    },
    precio: 1000
  },
  {
    id: "celular-04",
    titulo: "Celular 04",
    imagen: "./img/celulares/04.png",
    categoria: {
        nombre: "Celulares",
        id: "celulares"
    },
    precio: 1000
  },
  {
    id: "celular-05",
    titulo: "Celular 05",
    imagen: "./img/celulares/05.png",
    categoria: {
        nombre: "Celulares",
        id: "celulares"
    },
    precio: 1000
  },
  // Consolas
  {
    id: "consola-01",
    titulo: "Consola 01",
    imagen: "./img/consolas/01.png",
    categoria: {
        nombre: "Consolas",
        id: "consolas"
    },
    precio: 1000
  },
  {
    id: "consola-02",
    titulo: "Consola 02",
    imagen: "./img/consolas/02.png",
    categoria: {
        nombre: "Consolas",
        id: "consolas"
    },
    precio: 1000
  },
  {
    id: "consola-03",
    titulo: "Consola 03",
    imagen: "./img/consolas/03.png",
    categoria: {
        nombre: "Consolas",
        id: "consolas"
    },
    precio: 1000
  },
  {
    id: "consola-04",
    titulo: "Consola 04",
    imagen: "./img/consolas/04.png",
    categoria: {
        nombre: "Consolas",
        id: "consolas"
    },
    precio: 1000
  },
  {
    id: "consola-05",
    titulo: "Consola 05",
    imagen: "./img/consolas/05.png",
    categoria: {
        nombre: "Consolas",
        id: "consolas"
    },
    precio: 1000
  },
  {
    id: "consola-06",
    titulo: "Consola 06",
    imagen: "./img/consolas/06.png",
    categoria: {
        nombre: "Consolas",
        id: "consolas"
    },
    precio: 1000
  },
  {
    id: "consola-07",
    titulo: "Consola 07",
    imagen: "./img/consolas/07.png",
    categoria: {
        nombre: "Consolas",
        id: "consolas"
    },
    precio: 1000
  },
  {
    id: "consola-08",
    titulo: "Consola 08",
    imagen: "./img/consolas/08.png",
    categoria: {
        nombre: "Consolas",
        id: "consolas"
    },
    precio: 1000
  },
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregar = document.querySelectorAll(".producto-agregar")
const numerito =document.querySelector("#numerito")

function cargarProductos(productosElegidos) {

  contenedorProductos.innerHTML = "";

  productosElegidos.forEach(producto => {

    const div = document.createElement("div");
    div.classList.add("producto")
    div.innerHTML = `
    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
          <div class="producto-detalles">
              <h3 class="producto-titulo">${producto.titulo}</h3>
              <p class="producto-precio">$${producto.precio}</p>
              <button class="producto-agregar" id="${producto.id}">Agregar</button>
          </div>
    `

    contenedorProductos.append(div);
  })

  actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {
    
    botonesCategorias.forEach(boton => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");
    
    if (e.currentTarget.id != "todos") {
      const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
      tituloPrincipal.innerText = productoCategoria.categoria.nombre;

      const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
      cargarProductos(productosBoton);
    } else {
      tituloPrincipal.innerText = "Todos los productos"
      cargarProductos(productos);
    }
  })
})

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");

  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}


function agregarAlCarrito(e) {

  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton);

  if(productosEnCarrito.some(producto => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }  

  actualizarNumerito();

  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  numerito.innerText = nuevoNumerito;
}