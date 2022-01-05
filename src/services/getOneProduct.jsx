const oneProduct = {
    id: 1,
    image:
    "https://res.cloudinary.com/karenp/image/upload/v1641391344/productos/reme2_vf0dap.png",
    title: "Remera Lady Gaga",
    descripcion: "remera personalizada",
    categoria: "Remeras",
    price: "2000",
    stock: "4",
};

const getOneProduct = new Promise((resolve) => {
    setTimeout(() => {
    resolve(oneProduct);
    }, 3000);
});

export default getOneProduct;