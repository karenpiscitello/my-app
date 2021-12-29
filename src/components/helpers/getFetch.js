const productos = [ 
    {id: 1, imagen: '.images/REME1.PNG', nombre: 'remera', descripcion: 'Advengers', stock: 10},
    {id: 1, imagen: '.images/reme2.PNG', nombre: 'remera', descripcion: 'Simpson', stock: 5},
    {id: 1, imagen: '.images/reme3.PNG', nombre: 'remera', descripcion: 'Messi', stock: 10}
];


export const getFetch = new Promise((resolve)=>{
    setTimeout(() => {
        resolve(productos)
    },3000)
    
}) 