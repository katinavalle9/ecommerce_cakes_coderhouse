const listadoProductos = [
  {
    id: 1,
    name: "Brownie con almendras",
    price: 50,
    category: "Brownies",
    image: "/src/assets/imagesMocks/brownie-almendra.jpg",
    stock: 25,
    description:
      "Deliciosos y esponjosos brownies de chocolate acompañados encima con almendras.",
  },
  {
    id: 2,
    name: "Brownie con caramelo",
    price: 45,
    category: "Brownies",
    image: "/src/assets/imagesMocks/brownie-caramelo.jpg",
    stock: 25,
    description:
      "Deliciosos y esponjosos brownies de chocolate acompañados de una bola de helado de vainilla con caramelo.",
  },
  {
    id: 3,
    name: "Brownie combinado con diferentes chocolates",
    price: 55,
    category: "Brownies",
    image: "/src/assets/imagesMocks/brownie-colores.jpg",
    stock: 25,
    description:
      "Deliciosos y esponjosos brownies combinados con diferentes chocolates.",
  },
  {
    id: 4,
    name: "Brownie con frutos rojos",
    price: 60,
    category: "Brownies",
    image: "/src/assets/imagesMocks/brownie-fruta.jpg",
    stock: 25,
    description:
      "Deliciosos y esponjosos brownies combinados con frutos rojos.",
  },
  {
    id: 5,
    name: "Brownie con helado",
    price: 120,
    category: "Brownies",
    image: "/src/assets/imagesMocks/brownie-helado.jpg",
    stock: 25,
    description:
      "Dos deliciosos y esponjosos brownies acompañados de helado de vainilla.",
  },
  {
    id: 6,
    name: "Brownie bañado en chocolate con perlas decoradas",
    price: 70,
    category: "Brownies",
    image: "/src/assets/imagesMocks/brownie-perlas.jpg",
    stock: 25,
    description:
      "Deliciosos y esponjosos brownies acompañados con chocolate y perlas decorativas.",
  },
  {
    id: 7,
    name: "Brownie relleno por dentro",
    price: 80,
    category: "Brownies",
    image: "/src/assets/imagesMocks/brownie-relleno-chocolate.jpg",
    stock: 25,
    description: "Deliciosos y esponjosos brownies rellenos.",
  },
  {
    id: 8,
    name: "Brownie clásico",
    price: 45,
    category: "Brownies",
    image: "/src/assets/imagesMocks/brownie-sin-glass.jpg",
    stock: 25,
    description: "Deliciosos y esponjosos brownies clásicos.",
  },
  {
    id: 9,
    name: "Brownie con chispas de chocolate",
    price: 65,
    category: "Brownies",
    image: "/src/assets/imagesMocks/brownies-chispas-chocolate.jpg",
    stock: 25,
    description: "Deliciosos y esponjosos brownies con chispas de chocolate.",
  },
  {
    id: 10,
    name: "Brownie relleno glaseado",
    price: 90,
    category: "Brownies",
    image: "/src/assets/imagesMocks/brownies-relleno.jpg",
    stock: 25,
    description: "Deliciosos y esponjosos brownies con chispas de chocolate.",
  },
  {
    id: 11,
    name: "Galletas con frutas",
    price: 55,
    category: "Galletas",
    image: "/src/assets/imagesMocks/galleta-con-fruta.jpg",
    stock: 25,
    description: "Deliciosas galletas de mantequilla con frutas.",
  },
  {
    id: 12,
    name: "Galletas de avena con chocolate",
    price: 60,
    category: "Galletas",
    image: "/src/assets/imagesMocks/galletas-avena.jpg",
    stock: 25,
    description:
      "Deliciosas galletas avena acompañadas con chispas de chocolate.",
  },
  {
    id: 13,
    name: "Galletas con chispas de chocolate",
    price: 45,
    category: "Galletas",
    image: "/src/assets/imagesMocks/galletas-chispas.jpg",
    stock: 25,
    description:
      "Doradas y deliciosas galletas acompañadas con chispas de chocolate.",
  },
  {
    id: 14,
    name: "Galletas decoradas",
    price: 70,
    category: "Galletas",
    image: "/src/assets/imagesMocks/galletas-conejo.jpg",
    stock: 25,
    description:
      "Doradas y deliciosas galletas decoradas de diferentes formas.",
  },
  {
    id: 15,
    name: "Galletas con m&m's",
    price: 45,
    category: "Galletas",
    image: "/src/assets/imagesMocks/galletas-m&ms.jpg",
    stock: 25,
    description: "Doradas y deliciosas galletas acompañadas con m&m's.",
  },
  {
    id: 16,
    name: "Galletas rellenas de mermelada de mora",
    price: 58,
    category: "Galletas",
    image: "/src/assets/imagesMocks/galletas-mermelada.jpg",
    stock: 25,
    description: "Doradas y deliciosas galletas rellenas de mermelada.",
  },
  {
    id: 17,
    name: "Galletas rellenas chocolate",
    price: 58,
    category: "Galletas",
    image: "/src/assets/imagesMocks/galletas-rellenas.jpg",
    stock: 25,
    description: "Deliciosas galletas rellenas de chocolate blanco y negro.",
  },
  {
    id: 18,
    name: "Galletas en forma de sandwich",
    price: 35,
    category: "Galletas",
    image: "/src/assets/imagesMocks/galletas-sandwich.jpg",
    stock: 25,
    description: "Deliciosas galletas con chocolate y decorativos.",
  },
  {
    id: 19,
    name: "Docena de galletas combinadas",
    price: 420,
    category: "Galletas",
    image: "/src/assets/imagesMocks/galletas-varias.jpg",
    stock: 25,
    description: "Deliciosas galletas combinadas.",
  },
  {
    id: 20,
    name: "Donas glaseadas con chispas de color y de chocolate",
    price: 30,
    category: "Donas",
    image: "/src/assets/imagesMocks/dona-azul.jpg",
    stock: 25,
    description:
      "Deliciosas y esponjosas donas glaseadas con chispas de color y de chocolate.",
  },
  {
    id: 21,
    name: "Donas glaseadas con coco rayado y almendras",
    price: 35,
    category: "Donas",
    image: "/src/assets/imagesMocks/donas-blanco.jpg",
    stock: 25,
    description:
      "Deliciosas y esponjosas donas glaseadas con coco rayado y almendras.",
  },
  {
    id: 22,
    name: "Donas glaseadas con chispas de colores",
    price: 30,
    category: "Donas",
    image: "/src/assets/imagesMocks/donas-chispas.jpg",
    stock: 25,
    description:
      "Deliciosas y esponjosas donas glaseadas con chispas de colores.",
  },
  {
    id: 23,
    name: "Donas glaseadas acompañadas con leche",
    price: 75,
    category: "Donas",
    image: "/src/assets/imagesMocks/donas-leche.jpg",
    stock: 25,
    description:
      "Deliciosas y esponjosas donas glaseadas del color de tu elección acompañado de una mini botella de leche.",
  },
  {
    id: 24,
    name: "Donas glaseadas con chocolate y chispas de chocolate",
    price: 40,
    category: "Donas",
    image: "/src/assets/imagesMocks/donas-negra.jpg",
    stock: 25,
    description:
      "Deliciosas y esponjosas donas glaseadas de chocolate con chispas de chocolate.",
  },
  {
    id: 25,
    name: "Donas clásicas",
    price: 25,
    category: "Donas",
    image: "/src/assets/imagesMocks/donas-pelonas.jpg",
    stock: 25,
    description: "Deliciosas y esponjosas donas clásicas.",
  },
  {
    id: 26,
    name: "Donas con glaseado rosa",
    price: 35,
    category: "Donas",
    image: "/src/assets/imagesMocks/donas-rosa.jpg",
    stock: 25,
    description: "Deliciosas y esponjosas donas con glaseado rosado.",
  },
  {
    id: 27,
    name: "Paquete de 9 piezas de donas",
    price: 300,
    category: "Donas",
    image: "/src/assets/imagesMocks/donas-varias.jpg",
    stock: 25,
    description: "Paquete de 9 donas con diferentes decorados y glaseados.",
  },
  {
    id: 28,
    name: "Paquete de 4 piezas de donas",
    price: 155,
    category: "Donas",
    image: "/src/assets/imagesMocks/paquete-dona.jpg",
    stock: 25,
    description: "Paquete de 4 donas con diferentes decorados y glaseados.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listadoProductos);
    }, );
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
      resolve(listadoProductos.find((prod) => prod.id === productId));
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
      resolve(listadoProductos.filter((prod) => prod.category === categoryId.categoria));
  });
};

export const getCategory = () => {
  return new Promise((resolve) => {
      const categories = [...new Set(listadoProductos.map((prod) => prod.category))];
      resolve(categories);
  });
};

