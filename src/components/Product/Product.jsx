import { useLoaderData } from "react-router-dom";
import ProductCard from "../AddProduct/ProductCard";


const Product = () => {


    const brands = useLoaderData()
    
    return (
        <div>
            <h1>All Brand: {brands.length}</h1>
            <div className="grid grid-cols-3 gap-5 ml-10 ">
                {
                    brands.map(brand=><ProductCard key={Product._id} brand={brand}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Product;