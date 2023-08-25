export const fetchProducts = async () => {
    try {
        const res = await fetch("https://ruhan-mart-backend.vercel.app/api/products");
        const data = res.json();
        return data;
    } catch (error) {
        console.log("Error: ", error);
    }
}