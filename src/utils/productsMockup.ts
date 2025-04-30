import { IProduct } from "../types";

const productsToPreLoad: IProduct[] = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    price: 999,
    description:
      "Descubre el poder y la innovación del iPhone 16 Pro: captura cada detalle con su avanzado sistema de cámaras con teleobjetivo periscópico, experimenta un rendimiento inigualable gracias al chip A18 Pro, y sumérgete en una experiencia visual impresionante con su pantalla Super Retina XDR. Todo lo que imaginás, ahora al alcance de tu mano.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone16pro-digitalmat-gallery-3-202409?wid=728&hei=666&fmt=p-jpg&qlt=95&.v=1723843057832",
    categoryId: 1,
    stock: 10,
  },
  {
    id: 2,
    name: "iPhone 16e",
    price: 599,
    description:
      "El iPhone 16e combina potencia y eficiencia en un diseño refinado. Equipado con el chip A17 para un rendimiento ágil y una batería optimizada que acompaña tu día, ofrece una experiencia fluida en cada tarea. Su cámara inteligente mejora tus fotos en todo tipo de luz, y la pantalla Retina brinda colores vibrantes y detalles nítidos.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone16e-digitalmat-gallery-3-202502?wid=728&hei=666&fmt=p-jpg&qlt=95&.v=1738086376101",
    categoryId: 2,
    stock: 10,
  },
  {
    id: 3,
    name: "MacBook Air",
    price: 999,
    description:
      "Ligera, potente y lista para todo: la MacBook Air con chip M3 redefine el rendimiento portátil. Con un diseño ultradelgado, una batería que dura todo el día y una pantalla Liquid Retina que deslumbra con su claridad, es la compañera ideal para trabajar, crear o disfrutar desde cualquier lugar.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-13-digitalmat-gallery-1-202503?wid=728&hei=666&fmt=png-alpha&.v=1739590110917",
    categoryId: 3,
    stock: 10,
  },
  {
    id: 4,
    name: "iMac",
    price: 1299,
    description:
      "El iMac combina elegancia y potencia en un diseño todo-en-uno sorprendentemente delgado. Con el chip M3, ofrece un rendimiento veloz para tareas exigentes, y su pantalla Retina 4.5K brinda una calidad de imagen vibrante y precisa. Ideal para el trabajo, la creatividad o el entretenimiento, todo desde un mismo lugar.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-digitalmat-gallery-2-202410?wid=728&hei=666&fmt=png-alpha&.v=1729266243103",
    categoryId: 4,
    stock: 10,
  },
  {
    id: 5,
    name: "Apple Watch Series 10",
    price: 399,
    description:
      "Más inteligente, más saludable y más conectado que nunca: el Apple Watch Series 10 estrena un diseño más delgado y liviano, con una pantalla más grande y brillante. Monitorea tu salud con precisión avanzada, permanece siempre al tanto de lo importante y disfrutá de una integración perfecta con tu iPhone.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s10-202409?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1724168059157",
    categoryId: 5,
    stock: 10,
  },
  {
    id: 6,
    name: "AirPods Max",
    price: 549,
    description:
      "Los AirPods Max ofrecen una experiencia sonora envolvente con audio espacial y cancelación activa de ruido de última generación. Diseñados con materiales premium y un ajuste cómodo, combinan alta fidelidad con un estilo sofisticado. Cada detalle, desde el sonido hasta el diseño, está pensado para transformar la manera en que escuchás.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-midnight_FV1?wid=976&hei=916&fmt=jpeg&qlt=90&.v=1724927052268",
    categoryId: 6,
    stock: 10,
  },
];

export default productsToPreLoad;
