import { useCart } from "../context/Context";

type ProductsProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const Products = ({ id, name, price, image }: ProductsProps) => {
  const { addToCart, removeFromCart, getQuantity } = useCart();
  const quantity = getQuantity(id);
  return (
    <div className="border ">
      <div className="">
        <img src={image} className=" h-40 w-full object-cover" />
      </div>
      <div className=" py-4 pl-4 ">
        <p className="  text-lg font-bold">{name}</p>
        <p className="pb-2">
          <span className="font-semibold">$</span>
          {price}
        </p>
        {quantity === 0 ? (
          <button
            className=" border-red-600 border py-1 px-2
      hover cursor-pointer text-sm "
            onClick={() => addToCart(id)}
          >
            Add to Cart
          </button>
        ) : (
          <button
            className=" border-red-600 border py-1 px-2
      hover cursor-pointer text-sm bg-red-600 text-white "
            onClick={() => removeFromCart(id)}
          >
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
