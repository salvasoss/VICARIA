const products = [
    {id: 1,
      class :  "Limpia Radiador",
     name: "Limpia Radiador",
     description: "Elimina rapidamente Oxidos, Grasas, Cieno, y sedimentos. Evita futuras oxidaciones y no ataca metales, empaquetaduras, gomas ni tejidos. Formulacion a base de Sodas y Fosfatos. No contiene Potasa ",
     image: "../img/limpia radiador.jpg", 
     category: "Productos" }, 

    {id: 2,
      class :  "Sella Grietas",
     name: "Sella Grietas FK20",
     description: "Sella Grietas linea pesada, ideal para camiones. Solucion sin desarme de motor en perdidas de Tapa de Cilindro, Block, Camisas, Radiador de Calefaccion, Radiador de Motor, y Tapa de Cilindro fuera del vehiculo. No obstruye sistema de enfriamiento! ",
     image: "../img/sella grietas camiones.jpg", 
     category: "Productos" },  
     {
        id: 3,
        class :  "Sella Grietas",
        name: "Sella Grietas Súper",
        description: "Sella Grietas Super Plus Especial. Solucion sin desarme de motor en perdidas de Tapa de Cilindro, Block, Camisas, Radiador de Calefaccion, Radiador de Motor, y Tapa de Cilindro fuera del vehiculo. No obstruye sistema de enfriamiento!",
        image: "../img/sella grietas super.jpg", 
        category: "Productos",
     },

     {
        id: 4,
        class :  "Sella Grietas",
        name: "Sella Grietas",
        description: "Solucion sin desarme de motor en perdidas de Tapa de Cilindro, Block, Camisas, Radiador de Calefaccion, Radiador de Motor, y Tapa de Cilindro fuera del vehiculo. No obstruye sistema de enfriamiento! Ideal para radiadores plasticos",
        image: "../img/sella grietas.jpg", 
        category: "Productos",
     }
]

export const getProducts = () => {
  return new Promise ((resolve, reject) => {
     let error = false;
     setTimeout (() => {
        if (error) {
           reject ("Hubo un error, intente mas tarde")
        } else {
           resolve (products)
           
        }
     }, 0)
  })
}


export const getOneProduct = (id) => { //id= parametro a ingresar en la promesa
  let error = false
  return new Promise ((resolve, reject) => {
     setTimeout (() => {
        if (error) {
           reject ("Error!")
        }else {
           let product = products.find ((item) => item.id === Number(id)) 
           resolve (product)
        }
     }, 2000)
  })
}
