import axios from "axios";

export const fetchProducts = async () => {
    try {
        const res = await axios.get("https://ruhan-mart-backend.vercel.app/api/products");
        const data = res.data;
        return data;
    } catch (error) {
        console.log("Error: ", error);
    }
}