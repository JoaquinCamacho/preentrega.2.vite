const productosRopa = [
    { id: 1, nombre: 'Remera Azul', precio: 4000, img:"/img/remera.jpg", categoria: "Remeras" , descripcion : "Una remera cómoda de color azul, ideal para el uso diario."},
    { id: 2, nombre: 'Remera Negra', precio: 4000, img : "/img/remera1.jfif", categoria: "Remeras" , descripcion : "Clásica remera negra, versátil y fácil de combinar. ."},
    { id: 3, nombre: 'Remera Blanca', precio: 4000, img: "/img/remera2.jfif", categoria: "Remeras" , descripcion : "Sencilla remera blanca, perfecta para cualquier ocasión casual."},
    { id: 4, nombre: 'Jean Negro', precio: 6000, img: "/img/pantalones.jfif", categoria: "Pantalon" , descripcion : "Pantalón de jean negro, moderno y ajustado para un look elegante.." },
    { id: 5, nombre: 'Jean Gris', precio: 6000 , img : "img/pantalon2.jfif", categoria: "Pantalon" , descripcion : "Jean gris de corte clásico, ideal para un estilo casual y moderno.."},
    { id: 6, nombre: 'Jean azulado', precio: 6000 , img : "img/pantalon1.jfif", categoria: "Pantalon" , descripcion : "Jean azulado de diseño cómodo y moderno para el día a día.."},
    { id: 7, nombre: 'Campera Negra', precio: 10000 , img : "img/campera.jfif", categoria: "Campera" , descripcion : "Campera negra, abrigada y con estilo, perfecta para el invierno."},
    { id: 8, nombre: 'Campera Nike', precio: 16000 , img : "img/campera1.jfif", categoria: "Campera" , descripcion : "Campera deportiva Nike, ideal para mantenerte abrigado mientras te ejercitas.."},
    { id: 9, nombre: 'Campera Jordan', precio: 20000, img : "img/campera2.jfif", categoria: "Campera"  , descripcion : "Campera Jordan de alta calidad, combinando estilo y confort."}
];


const getProducts = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(productosRopa)
        }, 2000)
    })
}



export {getProducts}
