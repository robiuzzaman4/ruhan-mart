import Button from "@/components/Button";

const AddNewProduct = () => {
    return (
        <div>
            {/* add form */}
            <form
                
                className="bg-white rounded-lg shadow-sm grid gap-4 w-full max-w-sm mx-auto mt-4">
                <label className="grid gap-2">
                    <span className="text-sm font-medium">Product Name:</span>
                    <input
                        name="productName"
                        type="text"
                        placeholder="Fresh Oil"
                        className="px-4 py-1.5 bg-white rounded-lg border border-neutral-200 focus:border-indigo-500 focus:outline-none text-sm"
                        required />
                </label>
                <label className="grid gap-2">
                    <span className="text-sm font-medium">Product Price:</span>
                    <input
                        name="productPrice"
                        type="number"
                        placeholder="৳ 489"
                        className="px-4 py-1.5 bg-white rounded-lg border border-neutral-200 focus:border-indigo-500 focus:outline-none text-sm"
                        required />
                </label>
                <label className="grid gap-2">
                    <span className="text-sm font-medium">Product Weight:</span>
                    <input
                        name="productWeight"
                        type="text"
                        placeholder="500gm"
                        className="px-4 py-1.5 bg-white rounded-lg border border-neutral-200 focus:border-indigo-500 focus:outline-none text-sm"
                        required />
                </label>
                <label className="grid gap-2">
                    <span className="text-sm font-medium">Product Image URL:</span>
                    <input
                        name="productImage"
                        type="file" className="file:outline-none file:border-none file:rounded-lg file:text-xs file:bg-neutral-200" accept="image/*"
                        required />
                </label>
                {/* submit btn */}
                <Button
                    type="submit"
                    className="bg-indigo-500 text-neutral-50 rounded-lg">
                    Add Now
                </Button>
            </form>
        </div>
    );
};

export default AddNewProduct;