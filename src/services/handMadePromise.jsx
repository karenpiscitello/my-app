const productos = [
    {
        id:1,
        image:"https://res.cloudinary.com/karenp/image/upload/v1641391343/productos/REME1_zgh25o.png",
        title:"Remera Lady Gaga",
        description: "remera personalizada",
        category:"Remeras",
        price: "2000",
        stock: "4",
    },
    {
        id:2,
        image:"https://res.cloudinary.com/karenp/image/upload/v1641391344/productos/reme2_vf0dap.png",
        title:"Remera Harley Queen",
        description: "remera personalizada",
        category:"Remeras",
        price: "2000",
        stock: "10",
    },
    {
        id:3,
        image:"https://res.cloudinary.com/karenp/image/upload/v1641391344/productos/reme3_xxn7za.png",
        title:"Remera Dragon Ball",
        description: "remera personalizada",
        category:"Remeras",
        price: "2000",
        stock: "5",
    },
    {
        id:4,
        image:"https://res.cloudinary.com/karenp/image/upload/v1641391343/productos/buzo2_nhhtan.png",
        title:"Buzo Pelicula",
        description: "buzo personalizado",
        category:"Buzos",
        price: "3200",
        stock: "3",
    },
    {
        id:5,
        image:"https://res.cloudinary.com/karenp/image/upload/v1641391343/productos/buzo3_d1wjzn.png",
        title:"Buzo Serie",
        description: "buzo personalizado",
        category:"Buzos",
        price: "3200",
        stock: "15",
    },
    {
        id:6,
        image:"https://res.cloudinary.com/karenp/image/upload/c_scale,w_555/v1642121476/productos/WhatsApp_Image_2021-12-28_at_5.25.22_PM_ie1yay.jpg",
        title:"Remera Thanos",
        description: "remera personalizado",
        category:"Remeras",
        price: "2000",
        stock: "1",
    },
    {
        id:7,
        image:"https://res.cloudinary.com/karenp/image/upload/v1641391343/productos/buzo_udycee.png",
        title:"Buzo Peli",
        description: "este es el séptimo producto",
        category:"Buzos",
        price: "3200",
        stock: "3",
    },
    {
        id:8,
        image:"https://res.cloudinary.com/karenp/image/upload/c_scale,w_540/v1642121476/productos/WhatsApp_Image_2021-12-28_at_5.25.21_PM_lhut70.jpg",
        title:"Remera Princeso",
        description: "este es el octavo producto",
        category:"Remeras",
        price: "2000",
        stock: "4",
    },
    {
        id:9,
        image:"https://res.cloudinary.com/karenp/image/upload/c_scale,w_595/v1642121476/productos/WhatsApp_Image_2021-12-28_at_5.25.23_PM_mwbwlb.jpg",
        title:"Remera chapu",
        description: "este es el noveno producto",
        category:"Remeras",
        price: "2000",
        stock: "4",
    },
    {
        id:10,
        image:"https://res.cloudinary.com/karenp/image/upload/c_scale,w_518/v1642121685/productos/WhatsApp_Image_2021-12-28_at_5.25.25_PM_b3zi4q.jpg",
        title:"Remera Sirenita",
        description: "este es el décimo producto",
        category:"Remeras",
        price: "2000",
        stock: "4",
    },
];

const getProducts = new Promise((resolve) => {
    setTimeout(() => {
    resolve(productos);
    }, 2000);
});

export default getProducts;