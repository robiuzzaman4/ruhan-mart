import { removeFromDb } from "@/lib/cartFunctionality";
import { TStoredProductProps } from "@/types/types";
import Image from "next/image";
import { toast } from "react-hot-toast";

const CartProductCard = ({ _id, product_name, product_price, product_image, quantity, product_weight, handleDeleteProduct }: TStoredProductProps) => {

    return (
        <div
            key={_id}
            className="w-full grid gap-2 p-4 rounded-lg bg-white shadow-sm">
            <div className="w-full flex items-center justify-between gap-4">
                <span className="w-10 h-10 rounded-lg bg-gradient-to-b from-indigo-50 to-indigo-100 overflow-hidden">
                    <Image
                        width={40}
                        height={40}
                        src={product_image}
                        alt="Product Image"
                        className="p-1 rounded-lg" />
                </span>

                <h3 className="font-medium text-indigo-500">
                    ৳{product_price}
                </h3>
            </div>
            <h5 className="font-normal">
                {product_name}
            </h5>
            <div className="w-full flex items-center justify-between gap-4">
                <p className="font-normal text-sm">
                    Quantity: {quantity}
                </p>
                <p className="font-normal text-sm">
                    Total: ৳{product_price * quantity}
                </p>
            </div>
            <button
                onClick={() => handleDeleteProduct(_id)}
                className="w-fit text-start text-red-500 text-sm">
                Remove
            </button>
        </div>
    );
};

export default CartProductCard;