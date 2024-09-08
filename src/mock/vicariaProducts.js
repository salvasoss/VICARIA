const products = [
    {id: 1,
      class :  "Limpia Radiador",
     name: "Limpia Radiador",
     subtitle: "Elimina Oxidos, grasas, Cieno y sedimentos al instante",
     description: "Elimina rapidamente Oxidos, Grasas, Cieno, y sedimentos. Evita futuras oxidaciones y no ataca metales, empaquetaduras, gomas ni tejidos. Formulacion a base de Sodas y Fosfatos. No contiene Potasa ",
     image: "../img/limpia radiador.jpg", 
     category: "Productos" ,
     benefits: [
      "Elimina rápidamente Oxidos, Grasas, Cieno, y sedimentos.",
      "Evita futuras oxidaciones.",
      "No ataca metales, empaquetaduras, gomas ni tejidos.",
      "Formulación a base de Sodas y Fosfatos.",
      "No contiene Potasa."
    ],
    instructions: [
      "Volcar un sobre en el Radiador del Auto y 2 sobres en Camionetas",
      "Luego de 150km, cambiar el agua del Radiador", 
      "Para limpieza rapida, llevar la temperatura a 90°C y dejar actuar durante 25min",
      "Desagotar",
      "Con el motor en frio, lavar y volver a llenar"

    ]
   }, 

    {id: 2,
      class :  "Sella Grietas",
     name: "Sella Grietas FK20",
     subtitle: "Sella Grietas Linea Pesada",
     description: "Sella Grietas linea pesada, ideal para camiones. Solucion sin desarme de motor en perdidas de Tapa de Cilindro, Block, Camisas, Radiador de Calefaccion, Radiador de Motor, y Tapa de Cilindro fuera del vehiculo. No obstruye sistema de enfriamiento! ",
     image: "../img/sella grietas camiones.jpg", 
     benefits: [
      "Solucion sin desarme de motor.",
      "No obstruye sistema de enfriamiento.",
      "Solucion Permanente.",
      "Materia Prima importada",
      "Arregla perdidas en Blocks, Camisas, Tapas de Cilindros, Radiador de Calefacción y motor y Tapa de Cilindro fuera del Vehiculo."
      ],
      
     category: "Productos",
     instructions: [
      "Disolver el producto en un pequeño recipiente",
      "Desconectar la manguera de entrada directa al motor, donde se encuentra el termostato" , 
      "Verter por la misma (de esta manera no pasara por el radiador de forma inmediata",
      "Colocar la manguera en su posicion original, poner el motor en marcha y problema terminado",
    ]
   
   },  
     
     
     {
        id: 3,
        class :  "Sella Grietas",
        name: "Sella Grietas Súper",
        subtitle: "Sella Grietas Linea Súper",
        description: "Sella Grietas Super Plus Especial. Solucion sin desarme de motor en perdidas de Tapa de Cilindro, Block, Camisas, Radiador de Calefaccion, Radiador de Motor, y Tapa de Cilindro fuera del vehiculo. No obstruye sistema de enfriamiento!",
        image: "../img/sella grietas super.jpg", 
        benefits: [
         "Solucion sin desarme de motor.",
         "No obstruye sistema de enfriamiento.",
         "Solucion Permanente.",
         "Materia Prima importada",
         "Arregla perdidas en Blocks, Camisas, Tapas de Cilindros, Radiador de Calefacción y motor y Tapa de Cilindro fuera del Vehiculo."
         ],
        category: "Productos",
        instructions: [
         "Disolver el producto en un pequeño recipiente",
         "Desconectar la manguera de entrada directa al motor, donde se encuentra el termostato" , 
         "Verter por la misma (de esta manera no pasara por el radiador de forma inmediata",
         "Colocar la manguera en su posicion original, poner el motor en marcha y problema terminado",
       ]
     },

     {
        id: 4,
        class :  "Sella Grietas",
        name: "Sella Grietas",
        subtitle: "Sella Grietas Tradicional",
        description: "Solucion sin desarme de motor en perdidas de Tapa de Cilindro, Block, Camisas, Radiador de Calefaccion, Radiador de Motor, y Tapa de Cilindro fuera del vehiculo.No obstruye sistema de enfriamiento! Ideal para radiadores plasticos",
        image: "../img/sella grietas.jpg", 
        benefits: [
         "Solucion sin desarme de motor.",
         "No obstruye sistema de enfriamiento.",
         "Solucion Permanente.",
         "Materia Prima importada",
         "Arregla perdidas en Blocks, Camisas, Tapas de Cilindros, Radiador de Calefacción y motor y Tapa de Cilindro fuera del Vehiculo."
         ],
        category: "Productos",
        instructions: [
         "Disolver el producto en un pequeño recipiente",
         "Desconectar la manguera de entrada directa al motor, donde se encuentra el termostato" , 
         "Verter por la misma (de esta manera no pasara por el radiador de forma inmediata",
         "Colocar la manguera en su posicion original, poner el motor en marcha y problema terminado",
       ]
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
     }, )
  })
}
