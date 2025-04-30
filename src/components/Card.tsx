import { IProduct } from "@/types";

const Card: React.FC<IProduct> = ({ name, image, price }) => {
  return (
    <div className="w-full max-w-xs bg-white rounded-2xl shadow-md p-4 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-lg">
      <img src={image} alt={name} className="w-full h-40 object-contain mb-4" />
      <h2 className="text-lg font-semibold text-gray-800 text-center">
        {name}
      </h2>
      <p className="text-gray-500 text-sm mt-2">${price}</p>
    </div>
  );
};

export default Card;
